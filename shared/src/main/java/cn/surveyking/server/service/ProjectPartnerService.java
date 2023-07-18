package cn.surveyking.server.service;

import cn.surveyking.server.core.common.PaginationResponse;
import cn.surveyking.server.core.constant.CacheConsts;
import cn.surveyking.server.domain.dto.ProjectPartnerQuery;
import cn.surveyking.server.domain.dto.ProjectPartnerRequest;
import cn.surveyking.server.domain.dto.ProjectPartnerView;
import cn.surveyking.server.domain.dto.WhiteListRequest;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;

import java.util.List;

/**
 * @author javahuang
 * @date 2022/1/28
 */
public interface ProjectPartnerService {

	PaginationResponse<ProjectPartnerView> listProjectPartner(ProjectPartnerQuery query);

	@CacheEvict(cacheNames = CacheConsts.projectPermissionCacheName,
			key = "T(cn.surveyking.server.core.uitls.SecurityContextUtils).getUserId()")
	void addProjectPartner(ProjectPartnerRequest request);

	@CacheEvict(cacheNames = CacheConsts.projectPermissionCacheName,
			key = "T(cn.surveyking.server.core.uitls.SecurityContextUtils).getUserId()")
	void deleteProjectPartner(ProjectPartnerRequest request);

	@Cacheable(cacheNames = CacheConsts.projectPermissionCacheName,
			key = "T(cn.surveyking.server.core.uitls.SecurityContextUtils).getUserId()")
	List<String> getProjectPerms();

	void downloadPartner(ProjectPartnerQuery request);

	void importPartner(WhiteListRequest request);

}
