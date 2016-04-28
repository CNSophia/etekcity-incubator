$(document).ready(function(){
	/*右边上面导航下拉列表的效果*/
	$(".dropdown-menu li a").click(function(){
		var $dropdownText = $(".dropdown-toggle").text();				
		var $thisText = $(this).text();
		var $caret = ' <span class="caret"></span>';
		$(".dropdown-toggle").text($thisText);
		$(".dropdown-toggle").append($caret);
		$(this).text($dropdownText);
	});
	/*右边上面导航条的点击效果*/
	$(".user-center-right-nav li a").click(function(){
        $(".user-center-right-nav li").removeClass("active");
        $(this).parent().addClass("active");
    });
});