package cn.surveyking.server.domain.dto;

import cn.surveyking.server.core.constant.AnswerFreqEnum;
import cn.surveyking.server.core.constant.ProjectModeEnum;
import cn.surveyking.server.core.constant.ProjectPartnerTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.LinkedHashMap;
import java.util.List;

/**
 * @author javahuang
 * @date 2021/8/6
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectSetting {

	/**
	 * 1开启 0停止
	 */
	@Builder.Default
	private Integer status = 0;

	private ProjectModeEnum mode;

	@Builder.Default
	AnswerSetting answerSetting = new AnswerSetting();

	@Builder.Default
	SubmittedSetting submittedSetting = new SubmittedSetting();

	@Builder.Default
	ExamSetting examSetting = new ExamSetting();

	@Data
	public static class AnswerSetting {

		/**
		 * 需要密码填写
		 */
		private String password;

		/**
		 * 显示填写进度条
		 */
		private Boolean progressBar;

		/**
		 * 是否需要登录才能作答。 需要登录答卷的几种场景：1、问卷设置直接设置 2、工作流起始节点指定发起人 3、问卷里面有成员和部门题
		 */
		private Boolean loginRequired;

		/**
		 * 是否显示题号
		 */
		private Boolean questionNumber = true;

		/**
		 * 自动保存结果
		 */
		private Boolean autoSave;

		private LinkedHashMap initialValues;

		/**
		 * 回收答案条数限制,
		 */
		private Long maxAnswers;

		/**
		 * 截止回收时间
		 */
		private Long endTime;

		/**
		 * 只能通过微信作答
		 */
		private Boolean wechatOnly;

		/**
		 * ip 答题限制
		 */
		private UniqueLimitSetting ipLimit;

		/**
		 * cookie 答题限制
		 */
		private UniqueLimitSetting cookieLimit;

		/**
		 * 登录之后答题限制
		 */
		private UniqueLimitSetting loginLimit;

		/**
		 * 一页一题
		 */
		private Boolean onePageOneQuestion;

		/**
		 * 是否显示答题卡
		 */
		private Boolean answerSheetVisible;

		/**
		 * 白名单类型，支持系统用户和外部导入用户
		 *
		 * @see ProjectPartnerTypeEnum
		 */
		private Integer whitelistType;

		/**
		 * 白名单答题限制
		 */
		private UniqueLimitSetting whitelistLimit;

		/**
		 * 问卷校验触发类型
		 */
		private TriggerType triggerType = TriggerType.onBlur;

		/**
		 * 是否允许复制题目
		 */
		private Boolean copyEnabled = true;

	}

	public enum TriggerType {

		/**
		 * 输入时校验
		 */
		onInput,
		/**
		 * 失去焦点时校验
		 */
		onBlur,
		/**
		 * 点击提交按钮时校验并滚动到校验失败的问题
		 */
		onSubmit

	}

	@Data
	public static class SubmittedSetting {

		/**
		 * 答题完成后跳转自定义页面
		 */
		private String contentHtml;

		/**
		 * 允许更新答案
		 */
		private Boolean enableUpdate;

		/**
		 * 答题完成后跳转自定义链接
		 */
		private String redirectUrl;

		/**
		 * 公开查询
		 */
		private List<PublicQuery> publicQuery;

		/**
		 * 查询正确答案和解析
		 */
		private Boolean answerAnalysis;

		/**
		 * 是否显示成绩单
		 */
		private Boolean transcriptVisible;

		/**
		 * 显示排行榜
		 */
		private Boolean rankVisible;

	}

	@Data
	public static class UniqueLimitSetting {

		/**
		 * 限制数量
		 */
		private Integer limitNum;

		/**
		 * 限制频率
		 */
		private AnswerFreqEnum limitFreq;

		public UniqueLimitSetting() {
		}

		public UniqueLimitSetting(Integer limitNum, AnswerFreqEnum limitFreq) {
			this.limitNum = limitNum;
			this.limitFreq = limitFreq;
		}

	}

	/**
	 * 通过链接获取初始值，调用不同的链接可以获取不同的初始值
	 */
	@Data
	public static class LinkWithInitialValuesSetting {

		/**
		 *
		 */
		private String id;

		private LinkedHashMap initialValues;

	}

	@Data
	public static class ExamSetting {

		/**
		 * 考试开始时间
		 */
		private Long startTime;

		/**
		 * 考试结束时间
		 */
		private Long endTime;

		/**
		 * 最短交卷时间(分钟)
		 */
		private Integer minSubmitMinutes;

		/**
		 * 最长交卷时间(分钟)
		 */
		private Integer maxSubmitMinutes;

		/**
		 * 显示排名
		 */
		private Boolean rankingEnabled;

		/**
		 * 练习模式 打完问题后立即显示答案
		 */
		private Boolean exerciseMode;

		/**
		 * 闯关模式，打完本题才能答下一题
		 */
		private Boolean passMode;

		/**
		 * 闯关模式每一题的答题限制时间
		 */
		private Integer passModePerSeconds;

		/**
		 * 随机问题顺序
		 */
		private Boolean randomOrder;

		/**
		 * 随机问题
		 */
		private List<RandomSurveyCondition> randomSurvey;

		/**
		 * 错题练习
		 */
		private Boolean randomSurveyWrong;

		/**
		 * 考试过程允许切换屏幕次数
		 */
		private Integer maxSwitchScreenTimes;

	}

	/**
	 * 公开查询
	 */
	@Data
	public static class PublicQuery {

		/**
		 * 公开查询id
		 */
		private String id;

		/**
		 * 页面标题
		 */
		private String title;

		/**
		 * 是否开启
		 */
		private Boolean enabled;

		/**
		 * 页面介绍
		 */
		private String description;

		/**
		 * 查看权限，是否需要密码查看
		 */
		private String password;

		/**
		 * 条件问题
		 */
		private String conditionQuestion;

		/**
		 * 查询字段权限 0隐藏 1读 2写
		 */
		private LinkedHashMap<String, Integer> fieldPermission;

		/**
		 * 允许更新答案
		 */
		private Boolean enableUpdate;

		/**
		 * 链接有效时间段
		 */
		private List<String> linkValidityPeriod;

	}

	/**
	 * 随机问题条件
	 */
	@Data
	public static class RandomSurveyCondition {

		private String id;

		/**
		 * 题库ID
		 */
		private String repoId;

		/**
		 * 题库选择题数
		 */
		private Integer questionsNum;

		/**
		 * 每题分数
		 */
		private Double examScore;

		/**
		 * 标签
		 */
		private List<String> tags;

		/**
		 * 题型
		 */
		private List<String> types;

	}

}