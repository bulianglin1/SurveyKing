package cn.surveyking.server.impl;

import cn.surveyking.server.core.common.PaginationResponse;
import cn.surveyking.server.core.constant.AppConsts;
import cn.surveyking.server.core.constant.ErrorCode;
import cn.surveyking.server.core.constant.ProjectModeEnum;
import cn.surveyking.server.core.constant.ProjectPartnerTypeEnum;
import cn.surveyking.server.core.exception.ErrorCodeException;
import cn.surveyking.server.core.exception.InternalServerError;
import cn.surveyking.server.core.security.PasswordEncoder;
import cn.surveyking.server.core.uitls.ContextHelper;
import cn.surveyking.server.core.uitls.PinyinUtils;
import cn.surveyking.server.core.uitls.SecurityContextUtils;
import cn.surveyking.server.domain.dto.*;
import cn.surveyking.server.domain.mapper.RoleViewMapper;
import cn.surveyking.server.domain.mapper.UserPositionDtoMapper;
import cn.surveyking.server.domain.mapper.UserViewMapper;
import cn.surveyking.server.domain.model.*;
import cn.surveyking.server.mapper.*;
import cn.surveyking.server.service.BaseService;
import cn.surveyking.server.service.ProjectPartnerService;
import cn.surveyking.server.service.SystemService;
import cn.surveyking.server.service.UserService;
import com.anji.captcha.model.common.ResponseModel;
import com.anji.captcha.model.vo.CaptchaVO;
import com.anji.captcha.service.CaptchaService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.dhatim.fastexcel.reader.ReadableWorkbook;
import org.dhatim.fastexcel.reader.Row;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import javax.validation.ValidationException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.lang.String.format;
import static org.apache.commons.lang3.StringUtils.isBlank;
import static org.apache.commons.lang3.StringUtils.isNotBlank;

/**
 * @author javahuang
 * @date 2021/8/24getCellValue
 */
@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl extends BaseService<UserMapper, User> implements UserService {

	private final AccountMapper accountMapper;

	private final PasswordEncoder passwordEncoder;

	private final RoleViewMapper roleViewMapper;

	private final UserViewMapper userViewMapper;

	private final UserRoleMapper userRoleMapper;

	private final RoleServiceImpl roleService;

	private final UserPositionMapper userPositionMapper;

	private final UserPositionDtoMapper userPositionDtoMapper;

	private final DeptMapper deptMapper;

	private final SystemService systemService;

	private final ProjectMapper projectMapper;

	private final CaptchaService captchaService;

	/**
	 * @param username 账号密码登录认证使用
	 * @return
	 * @throws UsernameNotFoundException
	 */
	@Override
	public UserInfo loadUserByUsername(String username) throws UsernameNotFoundException {
		LambdaQueryWrapper<Account> queryWrapper = Wrappers.<Account>lambdaQuery().eq(Account::getAuthAccount,
				username);
		Account existAccount = accountMapper.selectOne(queryWrapper);
		if (existAccount == null) {
			throw new UsernameNotFoundException(format("用户: {}, 不存在", username));
		}
		if (existAccount.getStatus() != AppConsts.USER_STATUS.VALID) {
			throw new AccessDeniedException("用户: {}, 被禁用");
		}

		return userViewMapper.toUserView(existAccount);
	}

	@Override
	@Cacheable(cacheNames = "userCache", key = "#p0", condition = "#p0!=null", unless = "#result == null")
	public UserInfo loadUserById(String userId) {
		User user = this.getById(userId);
		if (user == null) {
			return null;
		}
		UserInfo userInfo = userViewMapper.toUserInfo(user);
		List<Role> roles = userRoleMapper
				.selectList(Wrappers.<UserRole>lambdaQuery().eq(UserRole::getUserId, user.getId())).stream()
				.map(ur -> roleService.getById(ur.getRoleId())).filter(x -> x != null).collect(Collectors.toList());
		Set<String> authorities = new HashSet<>();
		roles.forEach(role -> {
			authorities.add("ROLE_" + role.getCode());
			Arrays.stream(role.getAuthority().split(",")).forEach(authority -> {
				authorities.add(authority);
			});
		});
		userInfo.setAuthorities(
				authorities.stream().map(authority -> (GrantedAuthority) () -> authority).collect(Collectors.toSet()));
		// 设置用户部门
		if (user.getDeptId() != null) {
			Dept dept = deptMapper.selectById(user.getDeptId());
			if (dept != null) {
				userInfo.setDeptName(dept.getName());
			}
		}

		return userInfo;
	}

	@Override
	public PaginationResponse<UserView> getUsers(UserQuery query) {
		List<String> orgIds = getChildOrgIds(query.getDeptId());
		Page<User> userPage = pageByQuery(query,
				Wrappers.<User>lambdaQuery().like(isNotBlank(query.getName()), User::getName, query.getName())
						.exists(isNotBlank(query.getRoleId()),
								"select 1 from t_user_role t where t.user_id = t_user.id and t.role_id = {0}",
								query.getRoleId())
						.notExists(isNotBlank(query.getNeRoleId()),
								"select 1 from t_user_role t where t.user_id = t_user.id and t.role_id = {0}",
								query.getNeRoleId())
						.in(orgIds.size() > 0, User::getDeptId, orgIds).in(query.getIds() != null, User::getId,
								Arrays.asList(query.getIds() != null ? query.getIds() : new String[0])));
		return new PaginationResponse<>(userPage.getTotal(), userPage.getRecords().stream().map(x -> {
			UserView userView = userViewMapper.toView(x);
			Account account = accountMapper
					.selectOne(Wrappers.<Account>lambdaQuery().eq(Account::getUserId, x.getId()));
			userView.setUsername(account.getAuthAccount());
			userView.setStatus(account.getStatus());
			// 设置用户部门
			Dept dept = deptMapper.selectById(x.getDeptId());
			if (dept != null) {
				userView.setDeptName(dept.getName());
			}
			// 设置用户角色
			userView.setRoles(
					userRoleMapper.selectList(Wrappers.<UserRole>lambdaQuery().eq(UserRole::getUserId, x.getId()))
							.stream().map(userRole -> roleViewMapper.toView(roleService.getById(userRole.getRoleId())))
							.collect(Collectors.toList()));
			// 设置用户岗位
			userView.setUserPositions(userPositionDtoMapper.toView(userPositionMapper
					.selectList(Wrappers.<UserPosition>lambdaQuery().eq(UserPosition::getUserId, x.getId()))));
			return userView;
		}).collect(Collectors.toList()));
	}

	private List<String> getChildOrgIds(String parentOrgId) {
		List<String> result = new ArrayList<>();
		if (parentOrgId == null) {
			return result;
		}
		result.add(parentOrgId);
		deptMapper.selectList(Wrappers.<Dept>lambdaQuery().eq(Dept::getParentId, parentOrgId)).forEach(dept -> {
			result.addAll(getChildOrgIds(dept.getId()));
		});
		return result;
	}

	@Override
	public void createUser(UserRequest request) {
		User user = userViewMapper.fromRequest(request);
		this.save(user);

		// 创建登录账号
		Account account = userViewMapper.toAccount(request);
		account.setAuthType(AppConsts.AUTH_TYPE.PWD.name());
		account.setUserType(AppConsts.USER_TYPE.SysUser.toString());
		account.setAuthSecret(passwordEncoder.encode(request.getPassword()));
		account.setUserId(user.getId());
		account.setStatus(request.getStatus());
		accountMapper.insert(account);

		// 添加用户角色
		request.setId(user.getId());
		addUserRoles(request);
		// 添加用户岗位
		addUserPositions(request);
	}

	private void addUserRoles(UserRequest request) {
		if (!CollectionUtils.isEmpty(request.getRoles())) {
			request.getRoles().forEach(roleId -> {
				UserRole userRole = new UserRole();
				userRole.setUserId(request.getId());
				userRole.setRoleId(roleId);
				userRole.setUserType(AppConsts.USER_TYPE.SysUser.name());
				userRoleMapper.insert(userRole);
			});
		}
	}

	private void addUserPositions(UserRequest request) {
		if (!CollectionUtils.isEmpty(request.getUserPositions())) {
			request.getUserPositions().forEach(userPositionRequest -> {
				UserPosition userPosition = userPositionDtoMapper.fromRequest(userPositionRequest);
				userPosition.setUserId(request.getId());
				userPositionMapper.insert(userPosition);
			});
		}
	}

	@Override
	@CacheEvict(cacheNames = "userCache", key = "#request.id")
	public void updateUser(UserRequest request) {
		if (request.getId() == null) {
			return;
		}
		User user = userViewMapper.fromRequest(request);
		this.updateById(user);

		if (request.getStatus() != null || isNotBlank(request.getPassword())) {
			// 更新登录账号
			Account account = accountMapper
					.selectOne(Wrappers.<Account>lambdaQuery().eq(Account::getUserId, request.getId()));
			if (isNotBlank(request.getPassword()) && isNotBlank(request.getOldPassword())) {
				if (!passwordEncoder.matches(request.getOldPassword(), account.getAuthSecret())) {
					throw new InternalServerError("密码验证失败");
				}
			}
			if (request.getUsername() != null) {
				account.setAuthAccount(request.getUsername());
			}
			if (request.getStatus() != null) {
				account.setStatus(request.getStatus());
			}
			if (isNotBlank(request.getPassword())) {
				account.setAuthSecret(passwordEncoder.encode(request.getPassword()));
			}
			accountMapper.updateById(account);
		}

		// 更新用户角色
		if (request.getRoles() != null) {
			userRoleMapper.delete(Wrappers.<UserRole>lambdaQuery().eq(UserRole::getUserId, request.getId()));
			addUserRoles(request);
		}
		// 更新用户岗位
		if (request.getUserPositions() != null) {
			userPositionMapper
					.delete(Wrappers.<UserPosition>lambdaQuery().eq(UserPosition::getUserId, request.getId()));
			addUserPositions(request);
		}
	}

	@Override
	@CacheEvict(cacheNames = "userCache", key = "#id")
	public void deleteUser(String id) {
		removeById(id);
		accountMapper.delete(Wrappers.<Account>lambdaQuery().eq(Account::getUserId, id));
	}

	@Override
	public boolean checkUsernameExist(String username) {
		Account account = accountMapper
				.selectOne(Wrappers.<Account>lambdaQuery().eq(Account::getAuthAccount, username));
		if (account != null) {
			return true;
		}
		return false;
	}

	@Override
	public void updateUserPosition(UserRequest request) {
		userPositionMapper
				.delete(Wrappers.<UserPosition>lambdaQuery().eq(UserPosition::getPositionId, request.getId()));
		if (!CollectionUtils.isEmpty(request.getUserPositions())) {
			request.getUserPositions().forEach(userPositionRequest -> {
				UserPosition position = userPositionDtoMapper.fromRequest(userPositionRequest);
				position.setUserId(request.getId());
				userPositionMapper.insert(position);
			});
		}
	}

	@Override
	public Set<String> getUserGroups(String userId) {
		Set<String> groups = new LinkedHashSet<>();
		// 获取用户的系统角色
		userRoleMapper.selectList(Wrappers.<UserRole>lambdaQuery().eq(UserRole::getUserId, userId)).forEach(role -> {
			groups.add("R:" + role.getRoleId());
		});
		// 获取用户的用户岗位
		userPositionMapper.selectList(Wrappers.<UserPosition>lambdaQuery().eq(UserPosition::getUserId, userId))
				.forEach(userPosition -> {
					groups.add("P:" + userPosition.getDeptId() + ":" + userPosition.getPositionId());
					groups.add("P:" + "ALL:" + userPosition.getPositionId());
					groups.add("P:" + userPosition.getDeptId() + ":ALL");
				});
		// User current = getById(userId);
		groups.add("U:" + userId);
		// groups.add("P:" + current.getOrgId() + ":");
		return groups;
	}

	@Override
	public Set<String> getUsersByGroup(String groupId, String currentUser) {
		// 获取角色下面的所有用户
		if (groupId.startsWith("R:")) {
			return userRoleMapper
					.selectList(Wrappers.<UserRole>lambdaQuery().eq(UserRole::getRoleId, groupId.split(":")[1]))
					.stream().map(x -> x.getUserId()).collect(Collectors.toSet());
		}
		if (groupId.startsWith("P:")) {
			String[] orgAndPositionId = groupId.split(":");
			String orgId = orgAndPositionId[1], positionId = orgAndPositionId[2];
			if (orgId.contains(AppConsts.VARIABLE_CURRENT_ORG_ID)) {
				orgId = loadUserById(currentUser).getDeptId();
			}
			else if (orgId.contains(AppConsts.VARIABLE_PARENT_ORG_ID)) {
				orgId = loadUserById(currentUser).getDeptId();
				orgId = deptMapper.selectById(orgId).getParentId();
			}
			return userPositionMapper
					.selectList(Wrappers.<UserPosition>lambdaQuery()
							.eq(StringUtils.hasText(orgId), UserPosition::getDeptId, orgId)
							.eq(StringUtils.hasText(positionId), UserPosition::getPositionId, positionId))
					.stream().map(up -> up.getUserId()).collect(Collectors.toSet());
		}
		return Collections.EMPTY_SET;
	}

	@Override
	public List<UserInfo> selectUsers(SelectUserRequest request) {
		List<String> list = new ArrayList<>();
		if (request.getDeptId() != null) {
			list.add(request.getDeptId());
			this.getTreeDeptId(request.getDeptId(), list);
		}
		List<User> users = list(Wrappers.<User>lambdaQuery().select(User::getId)
				.in(StringUtils.hasText(request.getDeptId()), User::getDeptId, list)
				.like(StringUtils.hasText(request.getName()), User::getName, request.getName()));
		return Stream.concat(users.stream().map(user -> user.getId()), request.getSelected().stream())
				.collect(Collectors.toSet()).stream()
				.map(userId -> ContextHelper.getBean(UserService.class).loadUserById(userId).simpleMode())
				.collect(Collectors.toList());
	}

	private void getTreeDeptId(String deptId, List<String> list) {
		List<Dept> deptList = deptMapper.selectList(Wrappers.<Dept>lambdaQuery().eq(Dept::getParentId, deptId));
		Optional.ofNullable(deptList).map(List::stream).orElseGet(Stream::empty).forEach(info -> {
			list.add(info.getId());
			this.getTreeDeptId(info.getId(), list);
		});
	}

	@Override
	public void register(RegisterRequest request) {
		SystemInfo systemInfo = systemService.getSystemInfo();
		SystemInfo.RegisterInfo registerInfo = systemInfo.getRegisterInfo();
		if (registerInfo == null || !Boolean.TRUE.equals(registerInfo.getRegisterEnabled())) {
			throw new ErrorCodeException(ErrorCode.RegisterError);
		}

		long total = accountMapper
				.selectCount(Wrappers.<Account>lambdaQuery().eq(Account::getAuthAccount, request.getUsername()));
		if (total > 0) {
			throw new ErrorCodeException(ErrorCode.UsernameExists);
		}
		UserRequest createUserRequest = new UserRequest();
		createUserRequest.setUsername(request.getUsername());
		createUserRequest.setPassword(request.getPassword());
		createUserRequest.setName(request.getName());
		createUserRequest.setStatus(AppConsts.USER_STATUS.VALID);
		String role = request.getRole();
		if (role != null) {
			if (!registerInfo.getRoles().contains(role)) {
				throw new ErrorCodeException(ErrorCode.RegisterError);
			}
			createUserRequest.setRoles(Collections.singletonList(request.getRole()));
		}
		else if (registerInfo.getRoles().size() > 0) {
			createUserRequest.setRoles(registerInfo.getRoles());
		}
		createUser(createUserRequest);
	}

	@Override
	public List<RegisterRoleView> getRegisterRoles() {
		List<String> defaultRegisterRoleCodes = systemService.getSystemInfo().getRegisterInfo().getRoles();
		if (defaultRegisterRoleCodes.size() > 0) {
			return roleService.listByIds(systemService.getSystemInfo().getRegisterInfo().getRoles()).stream()
					.map(role -> {
						RegisterRoleView roleView = new RegisterRoleView();
						roleView.setId(role.getId());
						roleView.setName(role.getName());
						return roleView;
					}).collect(Collectors.toList());
		}
		return new ArrayList<>();
	}

	@Override
	public UserOverview getUserOverviewData() {
		UserOverview userOverview = new UserOverview();
		ProjectPartnerServiceImpl partnerService = (ProjectPartnerServiceImpl) ContextHelper
				.getBean(ProjectPartnerService.class);
		userOverview.setSurveyCount(partnerService.count(Wrappers.<ProjectPartner>lambdaQuery()
				.in(ProjectPartner::getType,
						Arrays.asList(ProjectPartnerTypeEnum.OWNER.getType(),
								ProjectPartnerTypeEnum.COLLABORATOR.getType()))
				.eq(ProjectPartner::getUserId, SecurityContextUtils.getUserId())
				.exists(String.format(
						"SELECT 1 FROM t_project t WHERE t.mode = '%s' AND t.id = t_project_partner.project_id",
						ProjectModeEnum.survey.name()))));

		userOverview.setExamCount(partnerService.count(Wrappers.<ProjectPartner>lambdaQuery()
				.in(ProjectPartner::getType,
						Arrays.asList(ProjectPartnerTypeEnum.OWNER.getType(),
								ProjectPartnerTypeEnum.COLLABORATOR.getType()))
				.eq(ProjectPartner::getUserId, SecurityContextUtils.getUserId())
				.exists(String.format(
						"SELECT 1 FROM t_project t WHERE t.mode = '%s' AND t.id = t_project_partner.project_id",
						ProjectModeEnum.exam.name()))));
		return userOverview;
	}

	@Override
	@SneakyThrows
	public void importUser(UserRequest request) {
		Map<String, String> roleName2Id = roleService.list().stream()
				.collect(Collectors.toMap(Role::getName, Role::getId));
		Map<String, String> deptName2Id = deptMapper.selectList(null).stream()
				.collect(Collectors.toMap(Dept::getName, Dept::getId));
		try (InputStream is = request.getFile().getInputStream(); ReadableWorkbook wb = new ReadableWorkbook(is)) {
			wb.getSheets().forEach(sheet -> {
				int[] rowNum = { 1 };
				try (Stream<Row> rows = sheet.openStream()) {
					rows.forEach(r -> {
						if (r.getRowNum() == 1) {
							return;
						}
						rowNum[0] = r.getRowNum();
						UserRequest userRequest = new UserRequest();
						userRequest.setName(
								getCellValue(r, 0).orElseThrow(() -> new ErrorCodeException(ErrorCode.FileParseError)));
						// 自动根据用户名设置登录名
						// 登录名可能有重复，通过唯一索引抛异常由用户自己控制
						userRequest.setUsername(
								getCellValue(r, 1).orElse(PinyinUtils.chineseToPinyin(userRequest.getName())));
						// 默认密码为 123456
						userRequest.setPassword(getCellValue(r, 2).orElse("123456"));
						userRequest.setPhone(r.getCellAsString(3).orElse(null));
						userRequest.setEmail(r.getCellAsString(4).orElse(null));
						String deptName = r.getCellAsString(5).orElse(null);
						if (deptName != null && deptName2Id.containsKey(deptName)) {
							userRequest.setDeptId(deptName2Id.get(deptName));
						}
						String roles = r.getCellAsString(6).orElse(null);
						if (roles != null) {
							List<String> roleIds = Arrays.stream(roles.split(",|\\s+")).filter(roleName2Id::containsKey)
									.map(roleName2Id::get).collect(Collectors.toList());
							userRequest.setRoles(roleIds);
						}
						createUser(userRequest);
					});
				}
				catch (Exception e) {
					if (e instanceof DuplicateKeyException) {
						throw new InternalServerError(String.format("模板第%d行用户已存在", rowNum[0]), e);
					}
					throw new InternalServerError(String.format("模板第%d行解析失败", rowNum[0]), e);
				}
			});
		}
	}

	@Override
	public PaginationResponse<MyTaskView> queryTask(MyTaskQuery query) {
		Page<ProjectPartner> page = ContextHelper.getBean(ProjectPartnerServiceImpl.class).pageByQuery(query, Wrappers
				.<ProjectPartner>lambdaQuery().eq(ProjectPartner::getUserId, SecurityContextUtils.getUserId())
				.ne(ProjectPartner::getStatus, AppConsts.ProjectPartnerStatus.ANSWERED)
				.eq(ProjectPartner::getType, ProjectPartnerTypeEnum.RESPONDENT_SYS_USER.getType())
				.exists("SELECT 1 FROM t_project t WHERE t.mode = {0} AND t.id = t_project_partner.project_id And t.is_deleted = 0",
						query.getType())
				.orderByAsc(ProjectPartner::getStatus).orderByDesc(ProjectPartner::getCreateAt));
		PaginationResponse<MyTaskView> result = new PaginationResponse<>(page.getTotal(),
				page.getRecords().stream().map(projectPartner -> {
					MyTaskView taskView = new MyTaskView();
					Project project = projectMapper.selectById(projectPartner.getProjectId());
					taskView.setId(projectPartner.getId());
					taskView.setProjectId(projectPartner.getProjectId());
					taskView.setName(project.getName());
					taskView.setStatus(projectPartner.getStatus());
					taskView.setExamStartTime(project.getSetting().getExamSetting().getStartTime());
					taskView.setExamEndTime(project.getSetting().getExamSetting().getEndTime());
					return taskView;
				}).collect(Collectors.toList()));
		return result;
	}

	@Override
	public PaginationResponse<MyTaskView> queryHistoryTask(MyTaskQuery query) {
		Page<Answer> page = new Page<>(query.getCurrent(), query.getPageSize());
		ContextHelper.getBean(AnswerServiceImpl.class).page(page,
				Wrappers.<Answer>lambdaQuery().eq(Answer::getCreateBy, SecurityContextUtils.getUserId()).exists(
						"SELECT 1 FROM t_project t WHERE t.mode = {0} AND t.id = t_answer.project_id And t.is_deleted = 0",
						query.getType()).orderByDesc(Answer::getCreateAt));
		if (page.getTotal() == 0) {
			return new PaginationResponse<>(0l, new ArrayList<>());
		}
		List<Project> projectList = projectMapper.selectList(Wrappers.<Project>lambdaQuery().in(Project::getId,
				page.getRecords().stream().map(x -> x.getProjectId()).collect(Collectors.toSet())));

		PaginationResponse<MyTaskView> result = new PaginationResponse<>(page.getTotal(),
				page.getRecords().stream().map(answer -> {
					MyTaskView taskView = new MyTaskView();
					taskView.setId(answer.getId());
					taskView.setAnswerId(answer.getId());

					Project project = projectList.stream().filter(x -> x.getId().equals(answer.getProjectId()))
							.findFirst().orElse(null);
					if (project != null) {
						taskView.setProjectId(project.getId());
						taskView.setName(project.getName());
						if (ProjectModeEnum.exam.equals(project.getMode())) {
							taskView.setExamScore(answer.getExamScore());
							taskView.setExamTotal(project.getSurvey().getAttribute().getExamScore());
						}
					}

					try {
						taskView.setStartTime(answer.getMetaInfo().getAnswerInfo().getStartTime());
						taskView.setEndTime(answer.getMetaInfo().getAnswerInfo().getEndTime());
					}
					catch (Exception e) {
						// ignore error
					}
					return taskView;
				}).collect(Collectors.toList()));
		return result;

	}

	@Override
	public void validateCaptcha(AuthRequest request) {
		SystemInfo systemInfo = systemService.getSystemInfo();
		if (systemInfo.getSetting() != null && Boolean.TRUE.equals(systemInfo.getSetting().getCaptchaEnabled())) {
			// 验证码已开启
			CaptchaVO captchaVO = new CaptchaVO();
			captchaVO.setCaptchaVerification(request.getCaptchaVerification());
			ResponseModel response = captchaService.verification(captchaVO);
			if (response.isSuccess() == false) {
				// 验证码校验失败，返回信息告诉前端
				// repCode 0000 无异常，代表成功
				// repCode 9999 服务器内部异常
				// repCode 0011 参数不能为空
				// repCode 6110 验证码已失效，请重新获取
				// repCode 6111 验证失败
				// repCode 6112 获取验证码失败,请联系管理员
				// repCode 6113 底图未初始化成功，请检查路径
				// repCode 6201 get接口请求次数超限，请稍后再试!
				// repCode 6206 无效请求，请重新获取验证码
				// repCode 6202 接口验证失败数过多，请稍后再试
				// repCode 6204 check接口请求次数超限，请稍后再试!
				throw new ValidationException(response.getRepMsg());
			}
		}
	}

	private Optional<String> getCellValue(Row row, int cellIndex) {
		String cellValue = row.getCellAsString(cellIndex).orElse(null);
		if (isBlank(cellValue)) {
			return Optional.empty();
		}
		return Optional.of(cellValue);
	}

}
