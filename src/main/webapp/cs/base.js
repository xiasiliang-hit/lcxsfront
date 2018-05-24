$(function(){
	    $('.weixin').mouseover(function(){
	    $('#wx_pic').show();})
	    $('.weixin').mouseout(function(){
	    $('#wx_pic').hide();
	})

if (/AppleWebKit.*Mobile/i.test(navigator.userAgent)
		|| (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
				.test(navigator.userAgent))) {
	if (window.location.href.indexOf("?mobile") < 0 && !/pc=true/.test(document.cookie)) {
		/*try {
			if (/Android|webOS|iPhone|iPod|BlackBerry/i
					.test(navigator.userAgent)) {
				window.location.href = "http://m.zghyjr.com";
			} else if (/iPad/i.test(navigator.userAgent)) {
				window.location.href = "http://m.zghyjr.com";
			}
		} catch (e) {
		}*/
	//	window.location.href = "http://m.zghyjr.com";
	}
}

// JavaScript Document
// author lance
 var BANKS_PATH='/';
;$.fn.extend({
    Tab:function(obj2,cur){
      // console.log( $(this))
       $(this).click(function(){

            var m=$(this).index();
            $(this).siblings().removeClass(cur);
             $(this).addClass(cur);
        $(obj2).hide();
          $(obj2).eq(m).show();  
        })
    },
    createlines:function (ement_a){
       var  ement=$(this);
    var wh = $(window).height();
    var color;
    //var vison= $.browser.msie ? $.browser.version : 10;
    ement.find(ement_a).each(function (index) {
        aa = $(this).attr('data-value');
        bb = $(this).attr('data-zt');
       
        color= aa<100 ? "#ff5b62":(bb==0 ? "#99cc33":"#00c0ff") 
        var top = $(this).offset().top;
        var scrollTop = $(document).scrollTop();
                    if ($(this).attr("data-complete") == "off") {
            return;
        } else {
             $(this).find(".jindu-li").css({"background":color})
            if (top >= scrollTop && top <= (scrollTop + wh)) {
                if (aa >= 100) {
                   
                    $(this).find(".jindu-li").animate({width:"100%"},1000);
                    $(this).attr("data-complete", "off");
                    ement.countFuna($(this).parent().find("span.jindu_zhi"), aa);
                } else {
                    $(this).find(".jindu-li").animate({width:aa+"%"},1000)
                        $(this).attr("data-complete", "off");
                       ement.countFuna($(this).parent().find("span.jindu_zhi"), aa);
                    }
            }
        }
     });
    return;
}

    ,countFuna:function (t, e) {
    	var a=0;
    if (0 == e) t.html("0%");
    else if (e > 0 && 100 >= e) var a = 0,
        i = setInterval(function () {
            a++; 
            if(a >= e) {
            	clearInterval(i);
            	t.html(e + "%");
            } else {
            	t.html(a + "%");
            }
        }, 10);
    else if (e>100) {var a = 0,
        i = setInterval(function () {
            a++, t.html(a + "%"), a ==100 && clearInterval(i)
        }, 10);
                    }
        return;
},
	/*向元素内部插入替换过的字符串
	var json = [{"name":"lance"}];
	var tpl = "My name is {name}";
	$("<div />").tpl_repalce(json,tpl);
	*/
	tpl_repalce : function(json, tpl){
		var _str = "", str = "";
		
		if(!json||typeof json !== "object"){return false;}
		
		var length = json.length;
		
		for(var i = 0; i < length; i++ ){
			_str = tpl;
			for(var p in json[i]){
				var regExp = new RegExp("{"+ p +"}","gmi");
				_str = _str.replace(regExp, json[i][p]);
			}
			str += _str;
		}
		$(this).append(str);
		
		return this;
	},//tpl_repalce
	
	/*tips泡泡提示框
	bugs:
		1.IE8-无圆角
		2.IE9-无动画
		3.页面出现横向滚动条时冒泡提示框定位异常
		
	$.fn.tips([a,b,c],true);					//初始化
	$(selector).trigger("close"); 				//关
	$(selector).trigger("open",["aaaaaaa"]); 	//开启
	
		1、数组元素默认为false
		2、数组元素为fasle或函数元素返回false时对应提示框不显示
		3、数组元素为true或函数元素返回true时对应提示框显示selectoer的placehoder值
		4、数组元素为字符串或函数元素返回字符串时对应提示框显示该字符串
		5、其它情况转字符串处理
	*/
	tips : function(arr){
		var isDemo = false;
		if(typeof arr === "boolean"){
			isDemo = arr;
			arr = [];
		}
		arr = arr||[];
		var $es = $();
		
		$(this).each(function(index) {
			if($(this).is(":hidden")||$(this).data("$e"))return true;
			
			var $e = $("<div />").addClass("ui_tips ui_transition_lazy").css({"opacity":0,"z-index":-1})
				.append($("<span />").addClass("ui_arrow"))
				.append($("<span />").addClass("ui_content ui_radius"));
			var _fix_x =$(this).attr("fix_x")?parseInt($(this).attr("fix_x")):0;
			var _fix_y =$(this).attr("fix_y")?parseInt($(this).attr("fix_y")):0;
			var text = "";
			
			$e.insertAfter(this);
			var margin_left = $(this).position().left+$(this).outerWidth(true)- $e.position().left+_fix_x+11,
				margin_top = $(this).position().top- $e.position().top+_fix_y;
			$e.css({"margin-left":margin_left+10, "margin-top":margin_top});
					
			$(this).blur(function(){
				if(isDemo){
					text = true;
				}else if(typeof arr[index] === "string"){
					text = arr[index];
				}else if(typeof arr[index] === "function"){
					text = arr[index].apply(this);
				}else{
					text = false;
				}
				
				//获取值为false时直接返回
				if(typeof text === "boolean"&&text == false){
					$(this).trigger("close");
					return false;
				}
				
				$(this).trigger("open", [text]);
			}).on("open",function(e, text){
					if(typeof text === "boolean"&&text == true){
						text = this.placeholder || "请输入！";
					}
					
					$(this).addClass("error");
					var margin_left = $(this).position().left+$(this).outerWidth(true)- $e.position().left+_fix_x+11,
						margin_top = $(this).position().top- $e.position().top+_fix_y;
					$e.css({"margin-left":margin_left-10, "margin-top":margin_top, "opacity":1,"z-index":9999}).find(".da_content").html(text.toString());
			}).on("focus close" ,function(){
				$e.css({"margin-left":"+=20px", "opacity":0,"z-index":-1});
				$(this).removeClass("error");
			}).data("$e",$e);
			
			$es = $es.add($e);
        });
		
		return $es;
	}//tips
	
	//文本溢出时自动加"..."
	/*
	demo:
		$("ui_dot").dot();
	*/
	,dot : function(settings){
		var default_setting={
				height:"20px"
			}
		var $dots = $(this);
		$.extend(default_setting,settings);
		
		$.getScript("js/jquery.dotdotdot.min.js", function(){
			$dots.css({"height":default_setting.height})
				.dotdotdot({callback : function( isTruncated, orgContent ) {
					if(isTruncated){
						var fs = parseInt($(this).css("font-size")),
							_w = $(this).width(),
							_w_e = Math.floor(_w/fs)*fs;
						var $e = $("<div />").addClass("ui_dot_tips ui_transition_fast")
							.css({"max-width":_w_e,"opacity":0,"z-index":-1})
							.append($("<span />").addClass("ui_arrow"))
							.append($("<span />").addClass("ui_content ui_radius").html(orgContent));
						var _fix_x = $(this).attr("fix_x")?parseInt($(this).attr("fix_x")):0;
						var _fix_y = $(this).attr("fix_y")?parseInt($(this).attr("fix_y")):0;
					
						$e.insertBefore(this);
						var margin_left = _fix_x,
							margin_top = _fix_y - $e.outerHeight()-10;
						$e.css({"margin-left":margin_left,"margin-top":margin_top});
						
						$(this).hover(function(){
							$e.css({"margin-top":margin_top+5, "opacity":1,"z-index":9999});
						},function(){
							$e.css({"margin-top":margin_top, "opacity":0,"z-index":-1});
						});
					}
					//else{
						//$(this).trigger("destroy").unbind("hover").prev(".da_dot_tips").remove();
					//}
			}});//dotdotdot
		});//getScript
		
		return $dots;
	}//dot
	
	/*可拖拽层
		$.fn.drag(selector);
		selector为拖拽位置，为空则层的任意点都可以拖拽
	*/
	,drag : function(selector){
		var $win = $(top.window),
			$doc = $(top.document),
			$drag = $(this).eq(0), 
			$drag_elem = $();
		
		if($(this).find(selector).length===0){
			$drag_elem = $drag;
		}else{
			$drag_elem = $drag.find(selector).eq(0);
		}
		$drag.css("position")==="static"&&$drag.css({"position":"fixed"});
			
		$drag_elem.mousedown(function(e){
			var _x = e.clientX, 
				_y = e.clientY,
				_w_drag = $(this).innerWidth(),
				_h_drag = $(this).innerHeight(),
				_w_window = $win.width(),
				_h_window = $win.height(),

				_scroll_top = $win.scrollTop(),
				_scroll_left = $win.scrollLeft(),
				_top,
				_left;
			var $clone = $("<div />").addClass("clone").css({width:$drag.width(),height:$drag.height()}).prependTo($drag);
			
			//移动
			$doc.mousemove(function(e){
				var _diff_x = e.clientX - _x,
					_diff_y = e.clientY - _y,
					_pos = $drag.position();
				
				_x = e.clientX;
				_y = e.clientY;
				_top = _pos.top - _scroll_top + _diff_y;
				_left = _pos.left - _scroll_left + _diff_x;
				
				//边界检测
				if(_top<0){
					_top = 0;
				}else if(_left<0){
					_left = 0;
				}else if(_top+_h_drag>_h_window){
					_top = _h_window-_h_drag;
				}else if(_left+_w_drag>_w_window){
					_left = _w_window-_w_drag;
				}
				
				$drag.css({
					"top" : _top,
					"left" : _left
				});
				return false;
			}).one("mouseup mouseleave",function(){
				$clone.remove();
				$(this).unbind("mousemove");
			});
		
			$drag.find("iframe").contents().one("mousemove",function(){
				$doc.unbind("mousemove");
			});
			
			return false;
		});//$drag_elem.mousedown
				
		return $drag;
	},//$.fn.drag
	
	/*收益日历表
	$.fn.calendar({
		my_date: '2015-2-8',//默认为当天
		month_load : income_list,//收益列表回调函数
		dates_click : income_details//收益详情回调函数
	});
	*/
	calendar:function(settings){
		settings = $.extend({},$(this).data("settings"),settings)||{};
		
		//获取要绘制月份的信息
		var $this = $(this),
		 	my_date = settings.my_date&&$.date(settings.my_date) || new Date(),
			obj_date = $.parseDate(my_date),
			month_dates = [new Date(obj_date.y, obj_date.m, 0).getDate(), new Date(obj_date.y, obj_date.m + 1, 0).getDate()];
		$this.data("settings",$.extend({},settings,{obj_date:obj_date}));
		
		//输出绘制信息
		var _days, str = "";
		if(!$this.data("$e")){//绘制基本框架结构
			var $e = $('<div class="head">'+
							'<ul class="years">'+
								'<li><font>2013</font>年</li>'+
								'<li><font>2014</font>年</li>'+
								'<li><font>2015</font>年</li>'+
								'<li><font>2016</font>年</li>'+
								'<li><font>2017</font>年</li>'+
								'<li><font>2018</font>年</li>'+
								'<li><font>2019</font>年</li>'+
								'<li><font>2020</font>年</li>'+
								'<li><font>2021</font>年</li>'+
								'<li><font>2022</font>年</li>'+
								'<li><font>2023</font>年</li>'+
								'<li><font>2024</font>年</li></ul>'+
							'<ul class="months">'+
								'<li><font>1</font>月</li>'+
								'<li><font>2</font>月</li>'+
								'<li><font>3</font>月</li>'+
								'<li><font>4</font>月</li>'+
								'<li><font>5</font>月</li>'+
								'<li><font>6</font>月</li>'+
								'<li><font>7</font>月</li>'+
								'<li><font>8</font>月</li>'+
								'<li><font>9</font>月</li>'+
								'<li><font>10</font>月</li>'+
								'<li><font>11</font>月</li>'+
								'<li><font>12</font>月</li></ul>'+
							'<span class="year_minus"></span>'+
							'<span class="month_minus"></span>'+
							'<span class="year"><font>8888</font>年</span>'+
							'<span class="month"><font>88</font>月</span>'+
							'<span class="month_add"></span>'+
							'<span class="year_add"></span>'+
						'</div>'+
						'<ul class="days">'+
						 '<li>日</li>'+
						  '<li>一</li>'+
						  '<li>二</li>'+
						  '<li>三</li>'+
						  '<li>四</li>'+
						  '<li>五</li>'+
						  '<li>六</li>'+
						'</ul>'+
						'<ul class="dates"></ul>');
			$this.data("$e",$e.appendTo($this));
			
			//关闭年份日期选择窗口
			$this.click(function(){
				$(this).find(".years,.months").hide();
			});
			
			//年份减1
			$this.find(".year_minus").click(function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date(obj_date.y-1, obj_date.m, 1)
				});
			});
			
			//月份减1
			$this.find(".month_minus").click(function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date(obj_date.y, obj_date.m-1, 1)
				});
			});
			
			//打开年份选择窗口
			$this.find(".year").click(function(e){
				e.stopPropagation();
				$this.find(".years").show().next(".months").hide();
			});
			
			//打开月份选择窗口
			$this.find(".month").click(function(e){
				e.stopPropagation();
				$this.find(".months").show().prev(".years").hide();	
			});
			
			//选择年份
			$this.find(".years").delegate("li","click",function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date($(this).find("font").text(), obj_date.m, 1)
				});
			});
			
			//选择月份
			$this.find(".months").delegate("li","click",function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date(obj_date.y, parseInt($(this).find("font").text())-1, 1)
				});
			});
			
			//月份加1
			$this.find(".month_add").click(function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date(obj_date.y, obj_date.m+1, 1)
				});
			});
			
			//年份加1
			$this.find(".year_add").click(function(){
				var obj_date = $this.data("settings").obj_date;
				$this.calendar({
					my_date: new Date(obj_date.y+1, obj_date.m, 1)
				});
			});
			
			//刷新右侧收益详情
			$this.find(".dates").delegate("li","click",function(){
				if(!$(this).hasClass("gray")&&!$(this).hasClass("current")){
					$(this).addClass("current").siblings(".current").removeClass("current");
					if(typeof settings.dates_click === "function")settings.dates_click.call($this.find(".current"));
				}
			});
		}//绘制基本框架结构
		$this.find(".year").find("font").html(obj_date.y);
		$this.find(".month").find("font").html(obj_date.m + 1);
		
		//月初日期补齐天数
		_days = new Date(obj_date.y, obj_date.m, 1).getDay();
		while(_days > 0){
			str += "<li class=\"gray\">" + (month_dates[0] - _days + 1) + "</li>";
			_days--;
		}
		
		//当月天数
		var data_month=obj_date.y+"-"+(obj_date.m+1)+"-";
		for(var i = 1; i <= month_dates[1]; i++){
			if(i===obj_date.d){
				str += "<li data-date=\""+data_month+i+"\" class=\"current\">" + i + "</li>";
			}else{
				str += "<li data-date=\""+data_month+i+"\">" + i + "</li>";
			}
		}
		
		//月未日期补齐天数
		_days = 7 - new Date(obj_date.y, obj_date.m + 1, 1).getDay();
		if(_days<7){
			for(var i = 1; i <= _days; i++){
				str += "<li class=\"gray\">" + i + "</li>"
			}
		}
		
		$this.find(".dates").html(str);
		
		//设置今天的背景色
		var today = new Date();
		var str_today = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
		$this.find(".dates").find("[data-date="+str_today+"]").addClass("today").attr("title","今天");
		
		if(typeof settings.month_load === "function")settings.month_load.call(obj_date);
		if(typeof settings.dates_click === "function")settings.dates_click.call($this.find(".current"));
		
		return $this;
	},//calendar
	
	/*分页控件
		var settings={
				total_recoreds:40,//总计录数
				records_per_page:5,//每页X条
				data_text:true,//是否显示统计数据
				start_end:false,//是否显示第一页最后一页
				prev_next:true,//是否显示上一页下一页
				page_skip:false//跳转至X页
			};
		$("#pages").pages(settings);
	*/
	pages:function(settings){
		var default_settings={
				current_page:1,//当前页
				total_recoreds:100,//总计录数
				records_per_page:10,//每页X条
				type:'white',//分页控件默认样式，gray可选
				width:45,//页面宽
				max_pages:4,//最多显示页码数量
				data_text:true,//是否显示统计数据
				start_end:true,//是否显示第一页最后一页
				prev_next:true,//是否显示上一页下一页
				page_skip:true,//跳转至X页
				ajax_load:null,//异步刷新表格
				align:"right"
			};
		var settings=$.extend({},default_settings,$(this).data("settings"),settings);
		$(this).data("settings",settings);
		
		var total_pages=Math.floor((settings.total_recoreds-1)/settings.records_per_page)+1;
		var $e=$();
		
		//生成页码
		var pages_num = settings.max_pages>total_pages?total_pages:settings.max_pages,
			$pages_warpper=$("<div />").css({"width":settings.width*pages_num}),
			$lis=$(),_$li=$(),_$current=$();
		for(var i=1;i<=total_pages;i++){
			_$li=$("<li />").addClass("ui_circle ui_transition_fast").text(i).click(function(){
				if($(this).hasClass("current")){return false;}
				
				$(this).addClass("current").siblings(".current").removeClass("current");
				set_position(this);

				typeof settings.ajax_load==='function'&&settings.ajax_load.call(this);
			});
			if(i===parseInt(settings.current_page)){
				_$current=_$li.addClass("current");
			}
			$lis=$lis.add(_$li);
		}
		$e=$pages_warpper.append($e.add($("<ul />").css({"width":settings.width*total_pages}).append($lis)));
		
		//生成上一页下一页功能按钮
		if(settings.prev_next){
			$e=$("<span />").addClass("go_prev ui_circle ui_transition_fast").click(function(){
					$e.find(".current").prev().click();
			   }).add($e)
				 .add($("<span />").addClass("go_next ui_circle ui_transition_fast").click(function(){
					$e.find(".current").next().click();
			   }));
		}
		
		//生成首页尾页功能按钮
		if(settings.start_end){
			$e=$("<span />").addClass("go_first ui_circle ui_transition_fast").click(function(){
					$e.find("li").eq(0).click();
			   }).add($e)
				 .add($("<span />").addClass("go_last ui_circle ui_transition_fast").click(function(){
					$e.find("li").eq(-1).click();
			   }));
		}
		
		//生成统计数据
		if(settings.data_text){
			var str="第<em class=\"current_page\">"+settings.current_page+"</em>页/共<em class=\"total_pages\">"+total_pages+"</em>页 总<em>"+settings.total_recoreds+"<em>条记录";
			$e=$("<label />").html(str).add($e);
		}
		
		//生成跳转按钮
		if(settings.page_skip){
			$e=$e.add($("<input type=input />").addClass("ui_radius").keyup(function(e){
					if(e.which===13){
						$(this).next().click();	
					}
				})).add($("<input type=button />").addClass("ui_radius").val('确定').click(function(){
					var page = parseInt($(this).prev().val());
					if(page>0&&page<=total_pages){
						$e.find("li").eq(page-1).click();
					}else if(page>total_pages){
						$e.find("li").eq(-1).click();
					}
				 }));
		}
		
		//注入当前元素
		$(this).removeAttr("style").addClass("ui_paging_button "+settings.type).append($e);
		$(this).find(".current_page").width($(this).find(".total_pages").width());
		$(this).css({width:function(){return $(this).outerWidth()}})
			   .find("li").eq(settings.current_page-1).click();
		set_position(_$current,1);
		
		if (settings.align == "left"){
			$(this).css({float:"left"});
		}else if(settings.align == "center"){
			$(this).css({float:"none"});
		}else{
			$(this).css({float:"right"});
		}
		
		function set_position(elem,duration){
			var pos=parseInt($(elem).text())||0,
				middle=Math.round((pages_num+1)/2),
				ml=0;
				
			if(middle>=pos){
				ml=0;
			}else if(pos-middle>total_pages-pages_num){
				ml=(pages_num-total_pages)*settings.width;
			}else{
				ml=(middle-pos)*settings.width;
			}
			$e.find(".current_page").text(pos).end()
			  .find("ul").stop(true,true).animate({"margin-left":ml},duration||600);
		}
		
		return $e;
	}//pages
});

$.extend({
	/*将数字用逗号分隔,返回值为字符串
	$.addCommas(123456789.123);
	*/
	addCommas : function(nStr){
	  nStr += '';
	  var x = nStr.split('.');
	  var x1 = x[0];
	  var x2 = x.length > 1 ? '.' + x[1] : '';
	  var rgx = /(\d+)(\d{3})/;
	  while (rgx.test(x1)) {
		  x1 = x1.replace(rgx, '$1' + ',' + '$2');
	  }
	  return x1 + x2;
	},//addCommas
	
	parseDate : function(my_date){
		var my_date = my_date&&new Date(my_date) || new Date();
		return obj_date = {
			y : my_date.getFullYear(),
			m : my_date.getMonth(),
			d : my_date.getDate(),
			w : my_date.getDay()
		}
	},//parseDate
	
	//将字符串解析为日期
	date : function(date){
		if(typeof date ==="string"){
			var arr_date = date.split("-");
			date = new Date(parseInt(arr_date[0]),parseInt(arr_date[1])-1,parseInt(arr_date[2]));
		}
		return date;
	},//date
	
	init_right_slide_bar : function(url){
		//幸运大转盘
		
		//收益计算器
				
		//回到顶端
		var $up = $("#up_handler");
		var $scroll_box = $("html,body");
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				$up.fadeIn(1000);
			}else{
				$up.fadeOut(1000);
			}	
		});
		$up.click(function(){
			$scroll_box.animate({"scrollTop":0},400);
		});
	}//init_right_slide_bar
	
	/**
	 * 通过时间JSON对象和时间格式转换成相应字符串
	 * @param jsonObj
	 * @param dateFormat包括：yy-MM-dd | yyyy-MM-dd | yy-MM-dd HH:mm:ss | yyyy-MM-dd HH:mm:ss | yyyy-MM-dd HH:mm 五种
	 * @returns {String}
	 */
	,getDateTimeFromJsonTime : function (jsonObj,dateFormat){
		if(jsonObj==null||jsonObj==""){
			return "";
		}
		var dateTime = jsonObj;
		var year = dateTime.year+1900;
		var month = dateTime.month + 1;
		var day = dateTime.date;
		if(month<10){
			month = "0" + month;
		}
		if(day<10){
			day = "0" + day;
		}
		var date = year+"-"+month+"-"+day;
		if(dateFormat=="yy-MM-dd"){
			return date.substring(2);
		}else if(dateFormat=="yyyy-MM-dd"){
			return date;
		}else if(dateFormat=="yy-MM-dd HH:mm:ss"){
			var hours = dateTime.hours;
			var minutes = dateTime.minutes;
			var seconds = dateTime.seconds;
			if(hours<10){
				hours = "0" + hours;
			}
			if(minutes<10){
				minutes = "0" + minutes;
			}
			if(seconds<10){
				seconds = "0" + seconds;
			}
			var time = hours+":"+minutes+":"+seconds;
			var date_time = date +" "+time;
			return date_time.substring(2);
		}else if(dateFormat=="yyyy-MM-dd HH:mm:ss"){
			var hours = dateTime.hours;
			var minutes = dateTime.minutes;
			var seconds = dateTime.seconds;
			if(hours<10){
				hours = "0" + hours;
			}
			if(minutes<10){
				minutes = "0" + minutes;
			}
			if(seconds<10){
				seconds = "0" + seconds;
			}
			var time = hours+":"+minutes+":"+seconds;
			return date +" "+time;
		}else if(dateFormat=="yyyy-MM-dd HH:mm"){
			var hours = dateTime.hours;
			var minutes = dateTime.minutes;
			if(hours<10){
				hours = "0" + hours;
			}
			if(minutes<10){
				minutes = "0" + minutes;
			}
			var time = hours+":"+minutes;
			return date +" "+time;
		}
	}//getDateTimeFromJsonTime
	
	/*
	 @msg:要显示的信息
	 @type:图标类型，0：正在加载，1：成功，2：失败、错误，3：警告
	 @autoClose:是否自动关闭
	 z-index:1100+;
	 demo:
	 	五秒后自动关，带回调
	 	$.msg("我可以五秒后自动关",1,true,function(){console.log('aaa')});
		点击确定关，不带回调
		$.msg("我需要点击确定关",1);
		立即关闭
		$.msg("close");
	*/
	,msg : function(msg,type,autoClose,callback){
        var WIN = top.window,//放到顶层窗口
			type = type || 0,
			msg = msg || "正在加载中,请耐心等候...",
            type_arr = ["ui_msg_loading", "ui_msg_success", "ui_msg_error", "ui_msg_warning"],
			$MSG = $(WIN.document.body).find(".da_msg").prev(".da_mask").andSelf(),
			ct;
			
		if(msg === 'close'){
			$MSG.find(".btn").click();
			return false;
		}
		
		if(typeof autoClose == 'function'){
			callback = autoClose;
			autoClose = false;
		}
		
		$MSG.remove();
		$MSG = $("<div />").attr("id","ui_msg").addClass("ui_msg ui_radius").css({"z-index":1101})
				.append($("<span />").addClass("icon"))
				.append($("<span />").addClass("text"))
				.append($("<a />").attr("href","javascript:void(0);")
						.addClass("btn ui_radius ui_transition_fast btn_ok").text("确定"));
		$(WIN.document.body).append($("<div />").addClass("ui_mask").css({"z-index":1100}).add($MSG));
		$MSG.find('.icon').attr("class", "icon "+type_arr[type]).next().text(msg);
		
		if(type === 0){
			$MSG.siblings(".da_mask").css({opacity:0.1});
			$MSG.find(".btn").hide();
			set_pos();
			ct = setTimeout(function(){
				$MSG.addClass("ui_transition_lazy").find('.text').text('您的请求仍需一点时间，请耐心等候...');
				set_pos();
				ct = setTimeout(function(){
					$MSG.fadeOut(3000,function(){
						$MSG.find(".btn").click();
					}).find('.text').text("没有完成你的操作，请重试!",3);	
					set_pos();
				},30000);
			},3000);
		}else{
			$MSG.find(".btn").show();
			set_pos();
			
			if(autoClose){
				ct = setTimeout(function(){
					$MSG.find(".btn").click();
				},5000);
			}
		}
		
		//关闭提示框
		$MSG.find(".btn").click(function(){
			clearTimeout(ct);
			$MSG.fadeOut().prev(".da_mask").fadeOut(function(){
					$MSG.add(this).remove();
					typeof callback === "function" && callback();
				});
		});
		
		function set_pos(){
			$MSG.css({ marginLeft: -parseInt($MSG.outerWidth())/2, marginTop:-parseInt($MSG.outerHeight())/2});
		}
		
        return $MSG;
	}//msg
	
	/*
	 @msg:要显示的信息
	 @cb_ok:第一个按钮的回调
	 @cb_cancel:第二个取消按钮的回调
	 @btn_ok:第一个按钮的文本
	 @btn_cancel:第二个按钮的文本
	 demo:
	 	$.confirm("你确认要删除吗?",function(){console.log("ok")},function(){console.log("cancel")});
	*/
	,confirm : function(msg, cb_ok, cb_cancel, btn_ok, btn_cancel){
        var WIN = top.window,//放到顶层窗口
			$confirm = $(WIN.document.body).find(".da_confirm").prev(".da_mask").andSelf();
		
		$confirm.remove();
		$confirm = $("<div />").attr("id","confirm").addClass("ui_confirm ui_radius").css({"z-index":1101})
				.append($("<span />").addClass("icon"))
				.append($("<span />").addClass("text"))
				.append($("<a />").attr("href","javascript:void(0);")
						.addClass("btn ui_radius ui_transition_fast btn_ok").text(btn_ok||"确定"))
				.append($("<a />").attr("href","javascript:void(0);")
						.addClass("btn ui_radius ui_transition_fast btn_cancel").text(btn_cancel||"取消"));
		$(WIN.document.body).append($("<div />").addClass("ui_mask").css({"z-index":1100}).add($confirm));
		$confirm.find('.text').text(msg);
		$confirm.css({ marginLeft: -parseInt($confirm.outerWidth())/2, marginTop:-parseInt($confirm.outerHeight())/2});
		
		//关闭确认框
		$confirm.find(".btn").click(function(){
			var index = $(this).index();
			if($(this).hasClass("btn_ok")){
				typeof cb_ok === "function" && cb_ok();
			}else if($(this).hasClass("btn_cancel")){
				typeof cb_cancel === "function" && cb_cancel();
			}

			$confirm.fadeOut().prev(".da_mask").fadeOut(function(){
				$confirm.add(this).remove();
			});
		});
		
        return $confirm;
	}//confirm
	
	//弹出层
	/*demo
		@_class:打开的窗体要使用的样式
		
		$.pop_up("box_cash","帐户提现","/user/account/cash.html");
	*/
	,pop_up : function (_class,title,url,height){
		var $win = $(top.window);
		var $body = $(top.document).find("body");
		var $mask = $("<div />").addClass("ui_mask").appendTo($body);
		var $e = $("<div />").addClass("ui_drag_box ui_radius "+_class).append(
			$("<h1 />").addClass("ui_linear-gradient").text(title).append($("<span /><b />"))
			.add($("<iframe />").attr("src", url).attr("frameborder","0")));
		$e.appendTo($body);
		var left = $win.width()/2 - $e.width()/2;
		
		if(typeof height === "number"){
			$e.css({left:left,height:height}).find("iframe").height(height-50);
		}else{
			$e.css({left:left}).find("iframe").height($e.height()-50);
		}
		
		$mask.click(function(){
			$e.find("h1").unbind("mousemove mouseup");
		}).dblclick(function(){
			$.remove_top_layer($e);
		});
		$e.drag("h1");
		$e.find("h1").delegate("span","click",function(){
			$.remove_top_layer($e);
		});
	}//pop_up

	//移除弹层
	/*	demo
		$.remove_top_layer(box_cash);
	*/
	,remove_top_layer:function(selector){
		var $doc = $(top.document);
		$doc.find(selector).prev(".da_mask").andSelf().remove();
	}//remove_pop_up
	
	//正则
	,reg : {
		isNull : /^[\s]{0,}$/,
		isNum : /^\d+$/,
		isEmail : /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
		login_name_el : /^[A-Za-z\u4e00-\u9fa5][\w\u4e00-\u9fa5]+$/,
		isMobile : /^(13|15|18|17|14)[0-9]{9}$/,
		isFloat : /^([1-9]+(\.[0-9]{2})?|0\.[1-9][0-9]|0\.0[1-9])$/,
		isMoney : /^((([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2}))|(([1-9]{1}\d*)|([0]{1}))?$/
	}//reg
	
	//parse_url
	/*demo
		var url = window.location.href;
		$.parse_url(url);
	*/
	,parse_url:function(url){
		url = url || window.location.search;
		url = url.split("?"),
		url = url[url.length - 1];
		var parameter = url.split("&"),
			obj_result = {};
		
		for (var i = 0; i < parameter.length; i++) {
			var val = parameter[i].split("=");
			obj_result[val[0]] = val[1];
		}
		
		return obj_result;
	}//parse_url
	
	
	//在最上级窗口打开页面
	/*demo
		var settings = {
			arr_img : ['1.jpg','2.jpg','3.jpg','4.jpg'],
			index : 1
		}
		
		top_open(settings);
	*/
	,top_open : function (settings){
		var $body = $(top.document).find("body"),
			length = settings.arr_img.length,
			index = settings.index,
			src = settings.arr_img[index],
			$img = $("<img />"),
			$mask = $("<div class=\"ui_mask\"><span>双击背景关闭<br />图片浏览</span></div>"),
			$image_box = $("<div class=\"ui_image_box\" ><span class=\"prev\"></span><span class=\"next\"></span></div>");
		
		$mask.add($image_box.append($img)).appendTo($body);
		
		$mask.dblclick(function(){
			$(this).find("span").click();
		}).find("span").click(function(){
			$mask.remove();
			$image_box.remove();
		});
		$img.load(function(){
			var _width = $(this).width(),
				_height = $(this).height(),
				w_win = $(top.window).width()-100,
				h_win = $(top.window).height()-50;
				
			//图片尺寸过大
			if(_width>w_win){
				_height = w_win/_width*_height;
				_width = w_win;
				$img.css({width:_width,height:_height});
			}
			if(_height>h_win){
				_width = h_win/_height*_width;
				_height = h_win;
				$img.css({width:_width,height:_height});
			}
			
			$image_box.css({"height":_height,"width":_width,"margin-top":-_height/2-10,"margin-left":-_width/2-10});
		}).removeAttr("style").attr("src",src);
		$image_box.find(".prev").click(function(){
			index = (index + length - 1) % length;
			$img.removeAttr("style").attr("src",settings.arr_img[index]);
		});
		$image_box.find(".next").click(function(){
			index = (index + length + 1) % length;
			$img.removeAttr("style").attr("src",settings.arr_img[index]);
		});
	}//top_open
	
	,set_iframe_height : function (){
		var h=$("body").height();
		$(top.document).find(".da_drag_box iframe").css({height:h})
			.parent().css({height:h+50});
	}//set_iframe_height
	

	,strToJson : function (str){ 
		var json = (new Function("return " + str))(); 
		return json; 
	}//strToJson

//	,is_ie8 : !!($.browser.msie && ($.browser.version == "8.0") && !$.support.style)
	//公用异步请求
	//url和success_callback必传，
	//data和type可选，
	//第三个参数为字符串时则将data赋值给type，data为空对象
	,tj_ajax: function(url, success_callback, data, type){
		if(typeof data === "string"){
			type = data;
			data = {};
		}
		
		$.ajax({
			url:url,
			data:data||{},
			success:success_callback,
			type : type||"GET",
			dataType:"json",
			contentType:"application/x-www-form-urlencoded; charset=UTF-8",
			error:function(XMLHttpRequest, textStatus, errorThrown){
				$.msg("close");
				$.msg("tj_ajax error.",3);
				console.log(XMLHttpRequest);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	}
});

//时间格式化
Date.prototype.format = function (format) {
	if (!format) {
	format = "yyyy-MM-dd hh:mm:ss";
	}
	var o = {
	"M+": this.getMonth() + 1, // month
	"d+": this.getDate(), // day
	"h+": this.getHours(), // hour
	"m+": this.getMinutes(), // minute
	"s+": this.getSeconds(), // second
	"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
	"S": this.getMilliseconds()
	// millisecond
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};
function fomatDateTime(str) {
	return new Date(parseInt(str)).format("yyyy-MM-dd hh:mm:ss");
}

function fomatDate(str) {
	return new Date(parseInt(str)).format("yyyy-MM-dd");
}

//直接截取某数保留至index位小数，不足以0补齐
function cutNumToFixed(num,index){
	var numStr = num + "";
	var numArr = numStr.split(".");
	if(index==0){
		return numArr[0];
	}
	if(numArr[1]!=null&&numArr[1].length > 0){//有小数的情况
		if(numArr[1].length > index){//小数位多于需要保留的位数
			numArr[1] = numArr[1].substr(0,index);
		}else{//小数位小于需要保留的位数
			var i = index - numArr[1].length;
			var point_0 = "";
			for (var int = 0; int < i; int++) {
				point_0 += "0";
			}
			numArr[1] += point_0;
		}
	}else{//没有小数的情况 
		var point_0 = "";
		for (var int = 0; int < index; int++) {
			point_0 += "0";
		}
		numArr[1] = point_0;
	}
	return numArr[0] + "." +numArr[1];
}




/**
* HTML5 placeholder polyfill
* @requires jQuery - tested with 1.6.2 but might as well work with older versions
*
* code: https://github.com/ginader/HTML5-placeholder-polyfill
* please report issues at: https://github.com/ginader/HTML5-placeholder-polyfill/issues
*
* Copyright (c) 2012 Dirk Ginader (ginader.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

(function($) {
    var debug = false,
        animId;
    function showPlaceholderIfEmpty(input,options) {
        if( input.val() === '' ){
            input.data('placeholder').removeClass(options.hideClass);
        }else{
            input.data('placeholder').addClass(options.hideClass);
        }
    }
    function hidePlaceholder(input,options){
        input.data('placeholder').addClass(options.hideClass);
    }
    function positionPlaceholder(placeholder,input){
        var ta  = input.is('textarea');
        var pt = parseFloat(input.css('padding-top'));
        var pl = parseFloat(input.css('padding-left'));

        // Determine if we need to shift the header down more.
        var offset = input.offset();
        if (pt) {
            offset.top += pt;
        }
        if (pl) {
            offset.left += pl;
        }

        placeholder.css({
            width : input.innerWidth()-(ta ? 20 : 4),
            height : input.innerHeight()-6,
            lineHeight : input.css('line-height'),
            whiteSpace : ta ? 'normal' : 'nowrap',
            overflow : 'hidden'
        }).offset(offset);
    }
    function startFilledCheckChange(input,options){
        var val = input.val();
        (function checkloop(){
            animId = requestAnimationFrame(checkloop);
            if(input.val() !== val){
                hidePlaceholder(input,options);
                stopCheckChange();
                startEmptiedCheckChange(input,options);
            }
        }());
    }
    function startEmptiedCheckChange(input,options){
        (function checkloop(){
            animId = requestAnimationFrame(checkloop);
            showPlaceholderIfEmpty(input,options);
        }());
    }
    function stopCheckChange(){
        if (window.cancelAnimationFrame) {
          cancelAnimationFrame(animId);
        }
    }
    function log(msg){
        if(debug && window.console && window.console.log){
            window.console.log(msg);
        }
    }

    $.fn.placeHolder = function(config) {
        log('init placeHolder');
        var o = this;
        var l = $(this).length;
        this.options = $.extend({
            className: 'placeholder', // css class that is used to style the placeholder
            visibleToScreenreaders : true, // expose the placeholder text to screenreaders or not
            visibleToScreenreadersHideClass : 'placeholder-hide-except-screenreader', // css class is used to visually hide the placeholder
            visibleToNoneHideClass : 'placeholder-hide', // css class used to hide the placeholder for all
            hideOnFocus : false, // either hide the placeholder on focus or on type
            removeLabelClass : 'visuallyhidden', // remove this class from a label (to fix hidden labels)
            hiddenOverrideClass : 'visuallyhidden-with-placeholder', // replace the label above with this class
            forceHiddenOverride : true, // allow the replace of the removeLabelClass with hiddenOverrideClass or not
            forceApply : false, // apply the polyfill even for browser with native support
            autoInit : true // init automatically or not
        }, config || window.placeHolderConfig);
        this.options.hideClass = this.options.visibleToScreenreaders ? this.options.visibleToScreenreadersHideClass : this.options.visibleToNoneHideClass;
        return $(this).each(function(index) {
            var input = $(this),
                text = input.attr('placeholder'),
                id = input.attr('id'),
                label,placeholder,titleNeeded,polyfilled;

            function onFocusIn() {
                if(!o.options.hideOnFocus && window.requestAnimationFrame){
                    startFilledCheckChange(input,o.options);
                }else{
                    hidePlaceholder(input,o.options);
                }
            }

            if(text === "" || text === undefined) {
              text = input[0].attributes["placeholder"] ? input[0].attributes["placeholder"].value : "";
            }
            label = input.closest('label');
            input.removeAttr('placeholder');
            if(!label.length && !id){
                log('the input element with the placeholder needs an id!');
                return;
            }
            label = label.length ? label : $('label[for="'+id+'"]').first();
            if(!label.length){
                log('the input element with the placeholder needs a label!');
                return;
            }
            polyfilled = $(label).find('.' + o.options.className);
            if(polyfilled.length) {
                //log('the input element already has a polyfilled placeholder!');
                positionPlaceholder(polyfilled,input);
                polyfilled.text(text);
                return input;
            }
            if(label.hasClass(o.options.removeLabelClass)){
                label.removeClass(o.options.removeLabelClass)
                     .addClass(o.options.hiddenOverrideClass);
            }

            placeholder = $('<span>').addClass(o.options.className).text(text).appendTo(label);

            titleNeeded = (placeholder.width() > input.width());
            if(titleNeeded){
                placeholder.attr('title',text);
            }
            positionPlaceholder(placeholder,input);
            input.data('placeholder',placeholder);
            placeholder.data('input',input);
            placeholder.click(function(){
                $(this).data('input').focus();
            });
            input.focusin(onFocusIn);
            input.focusout(function(){
                showPlaceholderIfEmpty($(this),o.options);
                if(!o.options.hideOnFocus){
                    stopCheckChange();
                }
            });
            input.change(function(){
                showPlaceholderIfEmpty($(this),o.options);
            });
            showPlaceholderIfEmpty(input,o.options);

            // reformat on window resize and optional reformat on font resize - requires: http://www.tomdeater.com/jquery/onfontresize/
            $(document).bind("fontresize resize", function(){
                positionPlaceholder(placeholder,input);
            });

            // optional reformat when a textarea is being resized - requires http://benalman.com/projects/jquery-resize-plugin/
            if($.event.special.resize){
                $("textarea").bind("resize", function(event){
					if ($(this).is(":visible")) {
						positionPlaceholder(placeholder,input);
					}
					event.stopPropagation();
					event.preventDefault();
                });
            }else{
                // we simply disable the resizeablilty of textareas when we can't react on them resizing
                $("textarea").css('resize','none');
            }

            if(index >= l-1 && typeof $.attrHooks !== 'undefined'){
                $.attrHooks.placeholder = {
                    get: function(elem) {
                        if (elem.nodeName.toLowerCase() === 'input' || elem.nodeName.toLowerCase() === 'textarea') {
                            if( $(elem).data('placeholder') ){
                                // has been polyfilled
                                return $( $(elem).data('placeholder') ).text();
                            }else{
                                // native / not yet polyfilled
                                return $(elem)[0].placeholder;
                            }
                        }else{
                            return undefined;
                        }
                    },
                    set: function(elem, value){
                        return $( $(elem).data('placeholder') ).text(value);
                    }
                };
            }

            if (input.is(":focus")) {
                onFocusIn();
            }
        });



    };
    $(function(){
        var config = window.placeHolderConfig || {};
        if(config.autoInit === false){
            log('placeholder:abort because autoInit is off');
            return;
        }
        if(('placeholder' in $('<input>')[0] || 'placeHolder' in $('<input>')[0]) && !config.forceApply){ // don't run the polyfill when the browser has native support
            log('placeholder:abort because browser has native support');
            return;
        }
        $('input[placeholder], textarea[placeholder]').placeHolder();
    });
}(jQuery));

/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.3';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

  /**
   * Extends the built-in list of html5 elements
   * @memberOf html5
   * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
   * @param {Document} ownerDocument The context document.
   */
  function addElements(newElements, ownerDocument) {
    var elements = html5.elements;
    if(typeof elements != 'string'){
      elements = elements.join(' ');
    }
    if(typeof newElements != 'string'){
      newElements = newElements.join(' ');
    }
    html5.elements = elements +' '+ newElements;
    shivDocument(ownerDocument);
  }

   /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document|DocumentFragment} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment,

    //extends list of elements
    addElements: addElements
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

  if(typeof module == 'object' && module.exports){
    module.exports = html5;
  }

}(typeof window !== "undefined" ? window : this, document));

})