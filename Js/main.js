$(function () {
	'use strict';
	$('.carousel').carousel({
		interval:5000
	});

	//Show Color Opstion

	$('.gear-check').click(function(){

		$('.color-opstion').toggle(1000);
	});
	//change theme color on click

	var colorLi = $('.color-opstion ul li');

	colorLi
	.eq(0).css("backgroundColor","#E41B17").end()
	.eq(1).css("backgroundColor","#344dff").end()
	.eq(2).css("backgroundColor","#7e11c1");

	colorLi.click(function(){
		$("link[href*='thims']").attr("href",$(this).attr("data-value"));
	});

	var scrollButtom = $('#scroll-top');

	$(window).scroll(function(){

		$(this).scrollTop() >= 700 ? scrollButtom.show() : scrollButtom.hide();

			

	});
	scrollButtom.click(function(){
			$('html,body').animate({scrollTop : 0},600);
		});

});

//loading screen
$(window).load(function(){
	

	$(".loading-overlay .spinner").fadeOut(1000,function()
		
		{
			$('body').css("overflow","auto");
			$(this).parent().fadeOut(1000);
	});
});