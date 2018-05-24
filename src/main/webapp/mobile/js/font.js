(function () {
    //设置页面的rem大小
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth /7.5 + 'px';
    }, false);
    window.onresize = function(){
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth /7.5 + 'px';
    };
})();
