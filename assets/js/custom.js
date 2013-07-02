$('document').ready(function(){
	$('#tagline').delay(500).hide().fadeIn(500);
	$('#tagline2').delay(1200);
	$('#tagline2').slideDown(500);

	$('#tagline3').delay(1800);
	$('#tagline3').slideDown(500);

	$('#tagline4').delay(2400);
	$('#tagline4').slideDown(500);

	$('#intro').delay(3300).hide().fadeIn(500);

	$('#social').delay(3800);
	$('#social').hide().fadeIn(500);

	$('#tagline').click(function(){
		//$(window).scrollTop($('#developer').offset().top);
		var stop = $('#about_me').offset().top;
   		var delay = 1000;
   		 $('body').animate({scrollTop: stop}, delay);
	});

	$('#tagline2').click(function(){
		//$(window).scrollTop($('#developer').offset().top);
		var stop = $('#developer').offset().top;
   		var delay = 1000;
   		 $('body').animate({scrollTop: stop}, delay);
	});

	$('#tagline3').click(function(){
		//$(window).scrollTop($('#developer').offset().top);
		var stop = $('#musician').offset().top;
   		var delay = 1000;
   		 $('body').animate({scrollTop: stop}, delay);
	});

	$('#tagline4').click(function(){
		//$(window).scrollTop($('#developer').offset().top);
		var stop = $('#photographer').offset().top;
   		var delay = 1000;
   		 $('body').animate({scrollTop: stop}, delay);
	});

});