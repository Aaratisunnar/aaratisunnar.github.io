/*==================================
	This Code is beautifully 
	written by:
	Aarati Sunar
===============================*/

/*====================================================
	
	* ==Table of Content ==*

	# Custom js for Main Navigation.

=========================================================*/
$(document).ready(function() { 

	$('.site-header #menu-bar').click(function(){
		$('body').addClass('open-menu');
	});

	$('.site-header .main-navigation .close-menu').click(function(){
		$('body').removeClass('open-menu');
	});

	$('.main-navigation ul li a').click(function(){
		$('body').removeClass('open-menu');
	});

	//To the top btn js. Has no dependencies.

	$(window).scroll(function() {
	    if ($(this).scrollTop() > 40) {
	        $('.to-top').fadeIn();
	    } else {
	        $('.to-top').fadeOut();
	    }

	});

	$('.to-top').click(function() {
	    $('html , body').animate({ scrollTop: 0 }, 200);
	});

	//Calling Isotope
	isotope();

	function isotope(){
		var $container = $('.work-section #grid');
		$container.isotope({
			filter: '*',
			layoutMode: 'masonry',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: true,
				layoutMode: 'fitRows'
			}
		});
		$('.work-section #filters .filter-btn').on('click' , function () {
			$('.work-section #filters .active').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					queue: true
				}
			});

			return false;
		});

	}

});