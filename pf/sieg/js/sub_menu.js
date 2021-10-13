/*  메뉴 hover 시  슬라이드  */


$(function(){
	$("#menu li").mouseover(function(){
	$("#sub_menu_box").css({"transition":"height,0.5s","height":"130px"}).stop();
	});
	
	$("#sub_menu_box").mouseleave(function(){
		$("#sub_menu_box").css({"transition":"height,0.5s","height":"0px"}).stop();
		$("#menu li").css({"font-weight":"normal","letter-spacing":"0px"});
	});
		
	$(".on_01").mouseover(function(){
	$(".on_01").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_02,.on_03,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".on_02").mouseover(function(){
	$(".on_02").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_03,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".on_03").mouseover(function(){
	$(".on_03").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_02,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".on_04").mouseover(function(){
	$(".on_04").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_02,.on_03,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".on_05").mouseover(function(){
	$(".on_05").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_02,.on_03,.on_04").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	
	
	$(".about_sub > li").mouseover(function(){
	$(".on_01").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_02,.on_03,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".collection_sub > li").mouseover(function(){
	$(".on_02").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_03,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".press_sub > li").mouseover(function(){
	$(".on_03").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_02,.on_04,.on_05").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	$(".store_sub > li").mouseover(function(){
	$(".on_05").css({"font-weight":"bold","letter-spacing":"2px"});
	$(".on_01,.on_02,.on_03,.on_04").css({"font-weight":"normal","letter-spacing":"0px"});
	});
	
	});
	
	