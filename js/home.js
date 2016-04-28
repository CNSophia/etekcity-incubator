/**
 * Created by marven on 2016/4/8.
 */
$(document).ready(function(){
    $(window).scroll(function(){
        $(".btn-view-more-partner").click(function(){
            $(".home-partner-mores").show();
            $(".btn-view-less-partner").show();
            $(this).hide();
        })
        $(".btn-view-less-partner").click(function(){
            $(this).hide();
            $(".btn-view-more-partner").show();
            $(".home-partner-mores").hide();
        })
        if($(window).scrollTop()>=632){
            $(".home-body").css({"padding-top":"106px"});
            $(".top-nav.top-nav-home .logo").css("visibility","visible");
            $(".home-logo").hide();
            $(".js-home-top-nav").css({"position":"fixed",top:"38px"}).addClass("attach");
        }else{
            $(".home-body").css({"padding-top":"38px"});
            $(".top-nav.top-nav-home .logo").css("visibility","hidden");
            $(".home-logo").show();
            $(".js-home-top-nav").css({"position":"relative",top:"0px"}).removeClass("attach");
        }
        /*var newWinScrollTop=$(window).scrollTop();
         console.log(newWinScrollTop);
         setTimeout(function(){

         $(".js-home-top-nav").animate({
         top:"-="+(newWinScrollTop-winScrollTop)
         },"fast")
         },500)
         winScrollTop=newWinScrollTop;*/
    })
})
