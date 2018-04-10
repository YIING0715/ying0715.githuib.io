$(document).keyup(function () {
    if(event.which==37){

    }
    switch(event.which){
        //向左
        case 37:
        $('.box').animate({marginLeft:-100});
        break;
        //向上
        case 38:

            break;
        //向右
        case 39:
            break;
        //向下
        case 40:
            break;
        case 13:
            var a = $('.canvas a').attr('href');
            console.log(a);
            window.open(a, "_self")
            break;
    }
})
for(var i =0;i<$('li').length;i++){
        $('li').eq(i).hover(function () {
            $(this).find('p').stop().slideToggle();
        })
    }
