/*这段js升级已经不要使用了begin*/
//var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
//var browser = navigator.userAgent.toLowerCase();
//var isMobile = false;
//for ( var i = 0; i < mobileAgent.length; i++) {
//	if (browser.indexOf(mobileAgent[i]) != -1) {
//		isMobile = true;
//		if(window.location.href.indexOf("www")!=-1){
//			location.href = 'https://m.zghyjr.com';
//		}
//		break;
//	}
//}
/*这段js pc,wap端升级放开*/
//var url = window.location.href;
//if (url.indexOf("https") < 0) {
//	url = url.replace("http:", "https:");
//	window.location.replace(url);
//}
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?2a66dba44b805fc579aefa8426621c88";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

function ajaxCheck(_formName, _url) {
	var member = null;
	$.ajax({
		url : _url,
		type : "post",
		data : $("#" + _formName + "").serialize(),
		dataType : "json",
		async : false,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			member = data;
		},
		error : function(textStatus) {
			alert("网络异常,请按F5刷新当前页面!");
		}
	});
	return member;
}

/* 普通ajax异步提交方法 */
function ajaxSubmit(param, _url) {
	var member = null;
	$.ajax({
		url : _url,
		type : "post",
		data : param,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			member = data;
		},
		error : function(textStatus) {
			alert("网络异常,请按F5刷新当前页面!");
		}
	});
	return member;
}

/* form表单ajax异步提交 */
function ajaxForm(form) {
	var member = null;
	$.ajax({
		url : $("#" + form).attr("action"),
		type : "post",
		data : $("#" + form).serialize(),
		dataType : "json",
		async : false,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			member = data;
		},
		error : function(textStatus) {
			alert("网络异常,请按F5刷新当前页面!");
		}
	});
	return member;
}

/**
 * 页面输入框信息ajax异步校验
 * 
 * @param params
 *            校验的参数
 * @param _url
 *            校验的url地址
 * @returns
 */
function ajaxCheckParam(params, _url) {
	var result = null;
	$.ajax({
		url : _url,
		type : "post",
		data : params,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if (data.sessionTimeout) {
				alert(data.msg);
				window.location.href = 'login';
				return false;
			} else {
				result = data;
			}
		},
		error : function(textStatus) {
			alert("网络异常,请按F5刷新当前页面!");
		}
	});
	return result;
}

function ajaxasync (_url,params,success,error){
	$.ajax({
		url : _url,
		type : "post",
		data : params,
		dataType : "json",
//	async : false,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if (data.sessionTimeout) {
				alert(data.msg);
				window.location.href = 'login';
				error&&error(data);
			
			} else {
				result = data;
				success(data)
			}
		},
		error : function(textStatus) {
			alert("网络异常,请按F5刷新当前页面!");
		}
	});
}


