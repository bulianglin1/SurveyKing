package cn.surveyking.server.domain.dto;

import cn.surveyking.server.core.constant.ProjectModeEnum;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.LinkedHashMap;

/**
 * @author javahuang
 * @date 2021/8/31
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class ProjectQuery extends PageQuery {

	private String id;

	private String password;

	private String name;

	private String parentId;

	private ProjectModeEnum mode;

	private LinkedHashMap<String, Object> answer;

	private String answerId;

	public void setAnswer(LinkedHashMap<String, Object> answer) {
		this.answer = answer;

	}

}
