var data=['phone6','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物劵'],
     timer=null,
     flag=0;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun; 
    stop.onclick=stopFun;   

    // 键盘事件 
    document.onkeyup=function(event){
        event=event || window.event;
        if (event.keyCode==32) {
            if (flag==0) {
                playFun();
                flag=1;
            } else{
                stopFun();
                flag=0;
            };
        };  
    }
}

function playFun () {
    var that=this;
    var title=document.getElementById('title');
    var play=document.getElementById('play');
    clearInterval(timer)
    timer=setInterval(function(){
        var random=Math.floor(Math.random()*data.length);
        title.innerHTML=data[random];
    },50);
    play.style.background='#999';
    // this.style.background='#999';   此行敲空格有Bug；
}

function stopFun(){
    clearInterval(timer);
    var play=document.getElementById('play');
    play.style.background='#036';
 }







