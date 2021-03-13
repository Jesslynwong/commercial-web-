function animate(obj,target,callback){
    // 先清除以前的定时器,否则会越来越快
    clearInterval(obj.timer);
    var step = (target - obj.offsetLeft)/10;
    // step可能有小数向下取整
    step > 0 ? Math.ceil(step) : Math.floor(step);
    obj.timer = setInterval(function(){
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            // 已经完成，清楚定时器，停下
            if(callback){
                callback()
            }
            // 有回调函数执行回调函数
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15)
}