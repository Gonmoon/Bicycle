$(function(){
	// Adaptiv
	if ($(document).width() <= 768){
		$('.nav').hide();
	};
	// Header
	$('.icon').click(function(){
		$(this).toggleClass('icon_open');
		$('.nav').slideToggle(300);
		$('body').toggleClass('lock');
	});
	// Slider
	$('.news__body-slider').slick({
		arrows:false,
		dots:true,
		autoplay:true,
	});
	// Image
	if ($(document).width() <= 768){
		$('#hover').addClass('image__hover');
	} else {
		$('#hover').hide();
		$('.image').mouseover(function(){
			$('#hover').show();
			$('#hover').addClass('image__hover');
		});
		$('.image').mouseleave(function(){
			$('#hover').hide();
		});
	};
});
