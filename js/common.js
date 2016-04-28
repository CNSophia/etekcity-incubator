/**
 * Created by marven on 2016/4/7.
 */

var Common=function(){};

Common.prototype.getExplorerInfo=function() {
    var explorer = window.navigator.userAgent.toLowerCase();
    // ie
    if (explorer.indexOf("msie") >= 0) {
        var ver = explorer.match(/msie ([\d.]+)/)[1];
        return {
            type: "IE",
            version: ver
        };
    }
    // firefox
    else if (explorer.indexOf("firefox") >= 0) {
        var ver = explorer.match(/firefox\/([\d.]+)/)[1];
        return {
            type: "Firefox",
            version: ver
        };
    }
    // Edge
    else if (explorer.indexOf("edge") >= 0) {
        var ver = explorer.match(/edge\/([\d.]+)/)[1];
        return {
            type: "Edge",
            version: ver
        };
    }
    // Chrome
    else if (explorer.indexOf("chrome") >= 0) {
        var ver = explorer.match(/chrome\/([\d.]+)/)[1];
        return {
            type: "Chrome",
            version: ver
        };
    }

    // Opera
    else if (explorer.indexOf("opera") >= 0) {
        var ver = explorer.match(/opera.([\d.]+)/)[1];
        return {
            type: "Opera",
            version: ver
        };
    }// Safari
    else if (explorer.indexOf("Safari") >= 0) {
        var ver = explorer.match(/version\/([\d.]+)/)[1];
        return {
            type: "Safari",
            version: ver
        };
    }
}
$(document).ready(function(){
    /*导航的点击效果*/
    $(".js-ibt-nav li a").click(function(){
        $(".js-ibt-nav li").removeClass("over");
        $(this).parent().addClass("over");
    });
    /*输入框获取、失去焦点时边框颜色的改变*/
    $(".js-input-box input").focus(function(){
		$(this).parent().addClass("input-box-focus");
    });
    $(".js-input-box input").blur(function(){
		$(this).parent().removeClass("input-box-focus");
    });
    $(".js-backtop").click(function(){
        $("html,body").animate({
            "scroll-top":"0px"
        },"slow")
    });
    /*导航的鼠标悬停*/
    var navTimer=null;
    $(".top-nav-list ul li a").hover(function(){
        if(navTimer!=null){
            clearTimeout(navTimer);
        }
        var _width=$(this).width();
        var _left=$(this).position().left;
        $(".top-nav-bb").css({"width":_width}).stop().animate({"left":_left},300);
    },function(){
        navTimer=setTimeout(function(){
            $(".top-nav-bb").animate({"width":"0px"},300);
        },800)
    });
    /*顶部二维码的弹出*/
    var qrcodeTimer=null;
    $(".js-dropdown-top-qrcode").hover(function(){
        if(qrcodeTimer){
            clearTimeout(qrcodeTimer);
        }
        $(".top-bar-qrcode-alert").fadeIn(300);
    },function(){
        qrcodeTimer=setTimeout(function(){
            $(".top-bar-qrcode-alert").fadeOut(300);
        },800)
    });
    $(".top-bar-qrcode-alert").hover(function(){
        if(qrcodeTimer){
            clearTimeout(qrcodeTimer);
        }
    },function(){
        qrcodeTimer=setTimeout(function(){
            $(".top-bar-qrcode-alert").fadeOut(300);
        },800)
    })
});


