function Pen(){
    this.get();
    this.PenMove();
}
Pen.prototype={
    get: function () {
        btn=document.getElementById('clear_btn');
        div=document.getElementById('clear');
        boxOffsetLeft=div.offsetLeft;
        onPen=document.getElementById('pen');
        inWidth=window.innerWidth;
    },
    PenMove: function () {
        if(innerWidth<1000){
            document.body.addEventListener('touchmove',penMove);
            btn.addEventListener('touchstart',btnDown);
            btn.addEventListener('touchend',btnUp);
        }
        else{
            document.addEventListener('mousemove',penMove);
            btn.addEventListener('mousedown',btnDown);
            btn.addEventListener('mouseup',btnUp);
        }

        function penMove(event){
            var x=event.pageX;
            var y=event.pageY;
            onPen.style.left=x-10+'px';
            onPen.style.top=y-45+'px';
        }

        function btnDown(event){
            var x=event.pageX;
            xx=x-boxOffsetLeft;
            if(innerWidth<1000){
                document.addEventListener('touchmove',btnMove);
            }
            else{
                document.addEventListener('mousemove',btnMove);
            }

        }
        function btnMove(event){
            boxWidth=document.getElementById('clear').offsetWidth ;
            btnWidth=document.getElementById('clear_btn').offsetWidth;
            boxTop=document.getElementById('clear').offsetTop;
            boxHeight=document.getElementById('clear').offsetHeight;
            var x =event.pageX;
            var y =event.pageY;
            if(y<boxTop||y>boxTop+boxHeight){
                document.removeEventListener('mousemove',btnMove);
                document.removeEventListener('touchmove',btnMove);
                resize();
            }
            if(btn.offsetLeft>boxWidth-btnWidth){
                window.open("init.html", "_self")
            }
            else if(x-boxOffsetLeft-xx>0){
                btn.style.left=x-boxOffsetLeft-xx+'px';
            }
        }
        function btnUp(){
            if(innerWidth<1000){
                document.removeEventListener('touchmove',btnMove);
            }
            else{
                document.removeEventListener('mousemove',btnMove);
            }
            resize();
        }

        function resize(){
            var btnLeft=btn.style.left;
            var x =parseInt(btnLeft);
            if(x>0){
                var timer=setInterval(function () {
                    x=x-3;
                    if(x>0){
                        btn.style.left=x+'px';
                    }
                },1);
            }
        }
    }

}
newPen = new Pen();
