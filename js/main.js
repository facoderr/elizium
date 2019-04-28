$(document).ready(function() {

	// Fullpage Event

	var delay = 300;
	var timeoutId;
	var animationIsFinished = false;
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		sectionSelector: '.page-section',
		verticalCentered: false,
		afterLoad: function(origin, destination, direction) {
			$('.page-animation').removeClass('animatedUp');
			$('.page-animation').removeClass('animatedDown');
			clearTimeout(timeoutId);
			animationIsFinished = false;
		},
		onLeave: function(origin, destination, direction){
			if (direction == 'down') {
				$('.page-animation').addClass('animatedUp');
			} else if (direction == 'up') {
				$('.page-animation').addClass('animatedDown');
			}
			timeoutId = setTimeout(function(){
				animationIsFinished = true;
				fullpage_api.moveTo(destination.index + 1);
			}, delay);
			return animationIsFinished;
		},
	});

	//

	// Slider Event
	$('.worker-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		swipeToSlide: true,
		touchThreshold: 20,
		speed: 500
	});

	$('.program-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: true,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: true,
					slidesToShow: 1
				}
			}
		]
	});

	$('.interior-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 11 20"><path d="M10.353,10.352 L1.353,19.352 L0.646,18.646 L9.293,9.999 L0.646,1.352 L1.353,0.645 L10.353,9.645 L10.000,9.999 L10.353,10.352 Z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 11 20"><path d="M10.353,10.352 L1.353,19.352 L0.646,18.646 L9.293,9.999 L0.646,1.352 L1.353,0.645 L10.353,9.645 L10.000,9.999 L10.353,10.352 Z"/></svg></button>',
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false
				}
			}
		]
	});

	//

	// Click Event
	$(document).on('click', '.js-toggle', function() {
		$('.nav').addClass('open');
	});
	$(document).on('click', '.js-call', function() {
		$('.popup').addClass('open');
	});
	$(document).on('click', '.js-close', function() {
		$('.nav').removeClass('open');
		$('.popup').removeClass('open');
	});

	//

	// IE 'object-fit: cover' fix

	function ObjectFitIt() {
		$('img.obj').each(function() {
			var imgSrc = $(this).attr('src');
			var fitType = 'cover';
			if ($(this).data('fit-type')) {
				fitType = $(this).data('fit-type');
			}
			$(this).parent().css({ 
				'background' : 'transparent url("' + imgSrc + '") no-repeat center center/' + fitType
			});
			$('img.obj').css('display','none'); 
		});
	}
	if ('objectFit' in document.documentElement.style === false) {
		ObjectFitIt();
	}

	//

	// Scroll Event

	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		$('html, body').animate({
			scrollTop: scroll
		}, 1500);
		return false;
	});

	//

	// Resize Event

	$(window).on('load', function() {
		if ($(this).width() <= 1199) {
			$('.head-toggle').prependTo('.head-row');
		} else {
			$('.head-toggle').prependTo('.head');
		}
	});
	$(window).on('resize', function() {
		if ($(this).width() <= 1199) {
			$('.head-toggle').prependTo('.head-row');
		} else {
			$('.head-toggle').prependTo('.head');
		}
	});

	//

	// Preloader Event

	$(window).on('load', function() {
		$('.js-pulse').fadeOut();
		$('.js-preloader').delay(400).fadeOut('slow');
		$('.nav-menu').clone().prependTo('.page-nav');
		$('.foot-socials-list a').clone().appendTo('.page-socials');
		if ($('.page-program').length > 0) {
			$('.page-nav').find('.nav-menu-link').removeClass('active');
			$('.page-nav').find('.nav-menu-item:nth-child(4) a').addClass('active');
		}
	});

	//
	
});