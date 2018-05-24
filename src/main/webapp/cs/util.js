/* 格式化字符 $.format(15800000,3,',') 输出 15,800,000 */
(function($) {
    $.extend({
        format : function(str, step, splitor) {
        	if(!str && str != 0) {
        		return "";
        	}
        	if(isNaN(str)) {
        		return "";
        	}
        	var number = Number(str);
        	var sign = number < 0 ? "-" : "";
            str = Math.abs(number).toString();
            var decimal = "";
            if(str.indexOf(".") > -1) {
            	decimal = str.substring(str.indexOf("."));
            	str = str.substring(0, str.indexOf("."));
            }
            var len = str.length;
  
            if(len > step) {
                 var l1 = len%step, 
                     l2 = parseInt(len/step),
                     arr = [],
                     first = str.substr(0, l1);
                 if(first != '') {
                     arr.push(first);
                 };
                 for(var i=0; i<l2 ; i++) {
                     arr.push(str.substr(l1 + i*step, step));                                    
                 };
                 str = arr.join(splitor);
             };
             return sign + str + decimal;
        }
    });
})(jQuery);

/**
 * 校验金额返回字符串错误字符串，如果为""表示正确
 * 
 * @param idName
 *            要校验数据的id
 * @param errorIdName
 *            错误span的id
 * @param animateElement
 *            动画的元素
 * @param errorMessageTitle
 *            错误的属性名
 * @param empty
 *            true非空不合法
 * @param length
 *            长度
 * @param deci
 *            精度
 * @returns {Boolean}
 */
function checkDoubleAmtStr(checkStr, empty, length, deci, errorMessageTitle) {
	// 联系正则校验
	var startLength = Number(length) - Number(deci) + Number(1);
	var doubleAmtReg = "^(0|[1-9][0-9]{0," + startLength + "})(\\.[0-9]{1," + deci + "})?$";
	var reg = new RegExp(doubleAmtReg);
	if (empty && checkStr.length <= 0) {
		return errorMessageTitle + "不能为空";
	}
	var strMax = "";
	for ( var i = 1; i < startLength; i++) {
		strMax += "9"
	}
	if (checkStr != "" && !reg.test(checkStr)) {
		return "请输入合法的" + errorMessageTitle + "(最大值" + strMax + ".99)";
	}
	return "";
}

