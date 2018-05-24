/**
 * Created by xhj on 2017/1/14 0014.
 */
// ======================下拉刷新  上拉加载==============
/* *声明下拉刷新所需要的对象 */
var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载...';
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开加载...';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开加载...';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '下拉刷新...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                pullDownAction();	// Execute custom function (ajax call?)
            } else if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
                pullUpAction();	// Execute custom function (ajax call?)
            }
        },
        // destroy:function()
    });

    setTimeout(function () {
        document.getElementById('wrapper').style.left = '0';
    }, 800);
}


// ==================================定义下拉刷新，上拉加载
function initializeScroll() {
    var scrollerBody=document.getElementById('scroller');
    var thelistBody=document.getElementById('thelist');
    // 添加下拉刷新节点
    pullDownHtml = document.createElement('div');
    pullDownHtml.innerHTML = '<span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新...</span>';
    pullDownHtml.id = 'pullDown';
    scrollerBody.insertBefore (pullDownHtml,thelistBody);
    //添加上拉加载节点
    var pullUpHtml = document.createElement('div');
    pullUpHtml.innerHTML = ' <span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>';
    pullUpHtml.id = 'pullUp';
    scrollerBody.appendChild(pullUpHtml);
    //
    // 下拉刷新事件
    pullDownAction = function () {
        page = 0;
        setTimeout(function () {
            ajaxGetData();
            myScroll.refresh();
        }, 1000);
    };
    //
    //上拉加载事件
    pullUpAction = function () {
        setTimeout(function () {
            ajaxGetData();
            myScroll.refresh();
        }, 1000);
    };

    // document.addEventListener('touchmove', function (e) {
    //     e.preventDefault();
    // }, false);

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(loaded, 200);
    }, false);
}
