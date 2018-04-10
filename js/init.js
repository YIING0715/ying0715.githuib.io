var clock=document.getElementById("#nav_clock");
//获取各位数字函数
    function unit(date){
        var a=Math.floor(date/10);
        return Math.floor(date-a*10);
    }
//获取十位数函数
    function decade(date){
        return Math.floor(date/10)
    }
    time();
//根据事件设置nav_clock
var timer;
var imgs=$('#nav_clock li img');
//自动执行
timer=setInterval('time()',1000);
function time(){
    var imgs=$('#nav_clock li img');
    var date1= new Date();
    //获取小时的十位数
    var hour1 = decade(date1.getHours());
//获取小时的个位数
    var hour2 = unit(date1.getHours());
//获取分钟十位数
    var minute1 = decade(date1.getMinutes());
//获取分钟个位数
    var minute2 = unit(date1.getMinutes());
//获取秒钟十位
    var second1 = decade(date1.getSeconds());
//获取秒钟个位
    var second2 = unit(date1.getSeconds());
    var shijian=[hour1, hour2, minute1,minute2,second1,second2];
    for(var i=0;i<imgs.length;i++){
        imgs.eq(i).css('top',-35*shijian[i]);
    };
}


//导航栏切换
//获取li标签
var lis = $('#nav_ul').children();
var slide=$('.slide_bg');
var slideWidth=slide.width();
for(var i = 0;i<lis.length;i++) {
    lis.eq(i).mouseover(function () {
        $('#slide_bg').stop().animate({left:$(this).index()*slideWidth},200);
        lis.eq($(this).index()).addClass('current').siblings('li').removeClass('current');
    });
    lis.eq(i).mouseout(function () {
        $('#slide_bg').stop().animate({left:0},100);
        lis.eq(0).addClass('current').siblings('li').removeClass('current');
    })
}

//点击进入标签效果
$('.bottom').mouseover(function () {
    $('.l').animate({left:'565px'},'slow');
});

setInterval(function () {
    $('.contain').animate({height:80},600);
    $('.nav_text p').fadeOut();;
    $('.wrapper').slideDown();
    $('.imgLogo').animate({top:10,left:160},600).css({width:100,height:60})
},600);

