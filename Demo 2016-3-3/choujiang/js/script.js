var data=['phone6','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物劵']，
     timer=null;

window.onload=function(){
    var title=document.getElementById('title'),
        play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun; 
}

function playFun () {
    timer=setInterval(function(){
        console.log('hello');
    },50)
}