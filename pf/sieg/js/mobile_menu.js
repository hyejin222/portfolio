// 모바일 메뉴 JavaScript


$(function(){
	var li_p = $(".mobile_sub_menu").height();
	var li_num = $(".mobile_sub_menu li").height();
	$("#menu_01").slideToggle(function(){
	$(".mobile_about_sub").css({"height": li_num*3 });
	$("#menu_02").css({"top": li_num*3+li_p});
	});
	});