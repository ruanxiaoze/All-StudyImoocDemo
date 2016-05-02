//  EVENT对象的keyCoden属性用于得到键盘对应键的键值
    document.onkeyup=function(event){
          event=event || window.event;
          console.log(event.keyCode);  
    }
