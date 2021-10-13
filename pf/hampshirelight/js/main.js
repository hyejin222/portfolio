
$(function() {

	// 스크롤시 헤더 나타났다 사라짐
	var prevPosition = 0;
	$(window).on('scroll', function(event){
	  var initPosition = $(this).scrollTop();
	  if(initPosition > prevPosition){
	    $('.header_area').hide();
	  } else {
		$('.header_area').show();
		$('.logo').show();
	  }
	  prevPosition = initPosition
	});

	$(document).scroll(function (){
		if ($(document).scrollTop()) {
			$('.header_area').hide();
		}
	});


	// 햄버거 메뉴
	$("nav, .black_bg").hide();
	$(".navbar").click(function(){
		$(this).toggleClass("after");
		$("nav").toggle().toggleClass("c_click");
		$(".black_bg").fadeToggle();
	});


	$('.bxslider').bxSlider({
		auto: true,
		pager: false,
		controls:false,
		pause: 3000
	});

	$('.bxslider2').bxSlider({
		mode: 'fade',
		auto: true,
		pager: false,
		controls:false
	});

	$('.bxslider3').bxSlider({
		auto: true,
		pager: false,
		controls:false,
		pause: 3000
	});

	// 하단 팝업
	$(".b_popup div a").click(function(){
		$(".b_popup").slideToggle();
	});


});










