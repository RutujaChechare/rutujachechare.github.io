$(document).ready(function(){
    $(window).scroll(function()
    {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{

        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
    });
});