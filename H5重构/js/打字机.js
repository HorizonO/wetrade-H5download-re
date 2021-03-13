// var boxObj2 = document.getElementById('str1');
var boxObj2 = document.getElementById('box1');

new Typed(boxObj2,{

   strings: ['This is a Singapore supermarket'], //length=31
// strings:['这是一家新加坡超市'],
   typeSpeed: 100,
   startDelay: 100,
   loop: true,
   loopCount: Infinity,
   showCursor:false
});

var boxObj3 = document.getElementById('box2');
new Typed(boxObj3,{
//    strings: ['This is a Singapore supermarket'],
   strings:['这是一家新加坡超市'], //length=9
   typeSpeed: 272.222,
   startDelay: 1000,
   loop: true,
   loopCount: Infinity,
   showCursor:false
});


//获取设备类型
// window.onload=function(){
//    // var req = new XMLHttpRequest();
//    // req.open('GET',document.location,false);
//    // req.send(null);
//    // console.log(req.getAllResponseHeaders())
//    console.log(navigator.userAgent)
// }