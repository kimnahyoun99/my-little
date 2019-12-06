$(document).ready(function(){
    SLIDE();
});
function SLIDE(){
    var current=0;
    setInterval(function(){ 
        if(current < 3){
            current++;
        }else{
            current=0;
        }
        var slidePosition=current*(-1200)+"px"
        $("#slide").animate({left:slidePosition},300);
    },3000);
};
