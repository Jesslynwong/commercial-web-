function countDown(time){
    var nowTime = +new Date(); //现在的时间转化为毫秒
    var setTime = +new Date(time); //输入的时间转化为毫秒
    var lastTime = (setTime - nowTime)/1000; //剩下的秒数
    // 转换时分秒
    d = parseInt(lastTime /60/60/24);  //剩余当天天数
    h = parseInt(lastTime /60/60%24);  //剩余小时数
    m = parseInt(lastTime /60%60);  //剩余分数
    s = parseInt(lastTime %60);  //剩余秒数

    return d +'天' + h + '时' + m +'分' + s + '秒';
}
console.log(countDown('2021-3-13 17:00:00'));
console.log(new Date())