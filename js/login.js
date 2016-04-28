$(document).ready(function(){
    /*输入框获取、失去焦点时边框颜色的改变*/
    $(".js-input-box input").focus(function(){
		$(this).parent().addClass("input-box-focus");
    });
    $(".js-input-box input").blur(function(){
		$(this).parent().removeClass("input-box-focus");
    });
});