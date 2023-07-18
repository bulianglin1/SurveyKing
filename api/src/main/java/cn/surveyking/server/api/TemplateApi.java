package cn.surveyking.server.api;

import cn.surveyking.server.core.common.PaginationResponse;
import cn.surveyking.server.domain.dto.*;
import cn.surveyking.server.service.TemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * 问卷/问题模板
 *
 * @author javahuang
 * @date 2021/9/23
 */
@RestController
@RequestMapping("${api.prefix}/template")
@RequiredArgsConstructor
public class TemplateApi {

	private final TemplateService templateService;

	@GetMapping("/list")
	@PreAuthorize("hasAuthority('template:list')")
	public PaginationResponse<TemplateView> listQuestionTemplate(TemplateQuery query) {
		return templateService.listTemplate(query);
	}

	@PostMapping("/create")
	@PreAuthorize("hasAuthority('template:create')")
	public String addTemplate(@RequestBody TemplateRequest template) {
		return templateService.addTemplate(template);
	}

	@PostMapping("/update")
	@PreAuthorize("hasAuthority('template:update')")
	public void updateTemplate(@RequestBody TemplateRequest template) {
		templateService.updateTemplate(template);
	}

	@PostMapping("/delete")
	@PreAuthorize("hasAuthority('template:delete')")
	public void deleteTemplate(@RequestBody TemplateRequest request) {
		templateService.deleteTemplate(request);
	}

	/**
	 * 模板广场获取分类
	 * @param query
	 * @return
	 */
	@GetMapping("/listCategory")
	public Set<String> listTemplateCategories(CategoryQuery query) {
		return templateService.listTemplateCategories(query);
	}

	/**
	 * 模板广场获取标签
	 * @param query
	 * @return
	 */
	@GetMapping("/listTag")
	public Set<String> getTags(TagQuery query) {
		return templateService.getTags(query);
	}

}
