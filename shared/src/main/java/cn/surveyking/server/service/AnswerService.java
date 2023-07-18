package cn.surveyking.server.service;

import cn.surveyking.server.core.common.PaginationResponse;
import cn.surveyking.server.core.constant.AppConsts;
import cn.surveyking.server.core.exception.InternalServerError;
import cn.surveyking.server.core.uitls.ContextHelper;
import cn.surveyking.server.core.uitls.HTTPUtils;
import cn.surveyking.server.core.uitls.IPUtils;
import cn.surveyking.server.domain.dto.*;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author javahuang
 * @date 2021/8/3
 */
public interface AnswerService {

	PaginationResponse<AnswerView> listAnswer(AnswerQuery filter);

	AnswerView getAnswer(AnswerQuery query);

	long count(AnswerQuery query);

	AnswerView saveAnswer(AnswerRequest answer);

	AnswerView updateAnswer(AnswerRequest answer);

	void deleteAnswer(AnswerRequest request);

	DownloadData downloadAttachment(DownloadQuery query);

	DownloadData downloadSurvey(DownloadQuery query);

	default AnswerMetaInfo.ClientInfo parseClientInfo(AnswerMetaInfo.ClientInfo clientInfo) {
		HttpServletRequest request = ContextHelper.getCurrentHttpRequest();
		if (clientInfo == null) {
			clientInfo = new AnswerMetaInfo.ClientInfo();
		}
		String userAgentStr = request.getHeader("User-Agent");
		clientInfo.setAgent(userAgentStr);
		clientInfo.setRemoteIp(IPUtils.getClientIpAddress(request));
		Cookie limitCookie = WebUtils.getCookie(request, AppConsts.COOKIE_LIMIT_NAME);
		if (limitCookie != null) {
			clientInfo.setCookie(limitCookie.getValue());
		}
		return clientInfo;
	}

	default ResponseEntity<Resource> download(DownloadQuery query) {
		DownloadData download;
		if (!CollectionUtils.isEmpty(query.getIds())) {
			query.setPageSize(query.getIds().size());
		}
		// 下载问卷答案
		if (query.getType() == DownloadQuery.DownloadType.answer) {
			download = downloadSurvey(query);
		}
		// 下载附件
		else if (query.getType() == DownloadQuery.DownloadType.answerAttachment
				|| query.getType() == DownloadQuery.DownloadType.attachment) {
			download = downloadAttachment(query);
		}
		else {
			throw new InternalServerError("未知下载类型");
		}
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, HTTPUtils.getContentDispositionValue(download.getFileName()))
				.contentType(download.getMediaType()).body(download.getResource());
	}

	List<AnswerView> listAnswerDeleted(AnswerQuery query);

	void batchDestroyAnswer(AnswerRequest request);

	void restoreAnswer(AnswerRequest request);

	AnswerUploadView upload(AnswerUploadRequest request);

}
