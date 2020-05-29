$(window).on('load', function () {
	$('#status').fadeOut();
	$('#preloader').delay(355).fadeOut();
});





var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 35,
	backSpeed: 35,
	startDelay: 500,
	loop: true,
	loopCount: Infinity
});



/*-----------------------------------------------------Counter-----------------------------------------*/

$(function() {
	new WOW().init();
})
// name
$(window).on('load', function() {
	$("#fname").addClass("animated bounceInDown infinite");
	$("#home-btn a").addClass("animated fadeInDown infinite");
});


/*---------------porjects-------------------------------------------------- */
$(function() {
	$("#projects").owlCarousel({
		items: 0,
		autoplay: true,
		smartSpeed: 700,//time to slide
		loop: true,
		autoplayHoverPause: true,
		dots: false,
		nav: true

	});
});