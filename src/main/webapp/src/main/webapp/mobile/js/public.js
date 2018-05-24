/**
 * Created by Administrator on 2017/4/8.
 */
var _url = document.domain;
// console.log(_url)
// var ajaxUrl="http://56web.93bus.com/jkfl/index.php/";//ajax共用的url前缀
// var ajaxUrl="http://www.cjlc.cn/jkfl/index.php/";//ajax共用的url前缀
var ajaxUrl="http://ilcxs.cn/jkfl/index.php/";//ajax共用的url前缀
//==============获取当前页面url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    // if (r != null) return r[2];
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}
//==============获取指定页面url中的参数
function getUrlParam2(url,name) {
    url = "?"+document.referrer.split("?")[1];
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = url.substr(1).match(reg);  //匹配目标参数
    // if (r != null) return r[2];
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

// =================================================================================================
//===============获取cookie
function getcookie() {
    var cookie = {};
    var all = document.cookie;
    if (all === '')
        return cookie;
    var list = all.split(';');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        item = item.replace(" ", "");
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}
//============保存cookie
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate+';path=/';
}
//===============移除cookie
function removeCookie(name) {
    setCookie(name, 1, -1);
}

//===============底部弹出
function alertBottom(str) {
    var div=document.createElement('div');
    div.innerHTML='<span class="m-botAlert-con">' + str + ' </span>';
    div.className='m-botAlert';
    div.id='botAlert';
    document.body.appendChild(div);
    setTimeout(function () {
        div.className='m-botAlert alert-hide'
    }, 3000);
    setTimeout(function () {
        document.body.removeChild(div);
    }, 5000);
}




/*window.onload=function () {
    var vid = getcookie().vid;
    if(vid){
        var str = getcookie().mobile;
        var mobile = str.substr(0,3)+"****"+str.substr(str.length-4);
        var alipay = getcookie().alipay;
        document.getElementById('loginbox').innerHTML = '<em><a href="/html/my/AccountCentral.html">'+mobile+'</a></em><a href="javascript:;" onclick="loginout()">退出</a>';
        if(!alipay){
            $.post(
                ajaxUrl + "Operation/bindData",{vid:vid},
                function (data) {
                    ret = data;
                    if(ret){
                        if(data['data'].alipay != null){
                            setCookie("alipay",data['data'].alipay);
                            setCookie("aliname",data['data'].aliname);
                        }
                    }
                }
            )
        }
        $(".login_showbox").css("display","block");
    }else{
        $(".menu-a2").css('display',"block");
        $(".menu-a3").css('display',"block");
        $(".unlogin_box").css("display","block")
    }
}*/


function loginout(){
    setCookie('vid','');
    setCookie('nickname','');
    setCookie('mobile','');
    setCookie('alipay','');
    setCookie('aliname','');
    alertBottom("您成功退出，将为你跳转至首页");
    setTimeout(function () {
        window.location.href="/";
    }, 1000);
}

//转义
function htmlDecode(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    return div.innerText;
}

/*weixin hover*/
$(".icon-weixin").mouseover(function(){
    $(".wxBox_img").css("display","block")
})
$(".icon-weixin").mouseout(function(){
    $(".wxBox_img").css("display","none")
})

function dz(n) {
    var arr = n ? ('' + n).match(/[\d\.]+/g) : [];
    if (arr) {
        for (var i = 0; i < arr.length; ++i) {
            var a = arr[i].split('.');
            if (a[1]) {
                a[1] = a[1].replace(/0*$/g, '');
            }
            if (a[1]) {
                arr[i] = a.join('.');
            } else {
                arr[i] = a[0];
            }
        }
    }
    return arr;
}
