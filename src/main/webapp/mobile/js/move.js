/**
 * Created by Administrator on 2017/5/31.
 */
function getStyle(obj,name)
{
    if (obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];

    }
}
function startMove(obj,json,fnEnd)
{
    clearInterval(obj.timer);  //清除对象的定时器，注意点
    obj.timer=setInterval(function () {

        var bstop=true; //假设所有属性都到了

        for(var attr in json){
            //遇到需要单独设置的时候用if来实现，且不影响原来的设置
            var cur=0;
            if(attr=='opacity')
            {
                //round的作用就是忽略小数部分，进行四舍五入
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);  //透明度不能忽略小数
            }
            else
            {
                cur=parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            //如果有一个值没有达到就继续
            if(cur!=json[attr])
                bstop=false;

            //遇到需要单独设置的时候用if来实现，且不影响原来的设置
            if (attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;

            }
            else
            {
                obj.style[attr]=cur+speed+'rem';
            }

//为了实现完美运动，所以先关掉和移出来if
            /*
             if(cur==json[attr])
             {
             clearInterval(obj.timer);
             if(fnEnd)fnEnd();
             }
             else
             {

             }
             */
        }
        if(bstop)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30);
}