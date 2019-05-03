$(document).ready(function() {

	// Fullpage Event

	var delay = 300;
	var timeoutId;
	var animationIsFinished = false;
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		//scrollingSpeed: 500,
		sectionSelector: '.page-section',
		normalScrollElements: '.overflow',
		verticalCentered: false,
		responsiveWidth: 1199,
		onLeave: function(origin, destination, direction) {
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
		afterLoad: function(origin, destination, direction) {
			$('.page-full').each(function(){
				var current = $('.page-section').filter('.active').index() + 1,
						total = $('.page-section').length;
				$('.page-pagination-current').html(current);
				$('.page-pagination-total').html(total);
			});
			$('.page-animation').removeClass('animatedUp');
			$('.page-animation').removeClass('animatedDown');
			clearTimeout(timeoutId);
			animationIsFinished = false;
		}
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
		lazyLoad: 'ondemand',
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

	// Tab Event

	var clickedTab = $('.page-certificate-tabList .active');
	var tabWrapper = $('.page-certificate-tabWrap');
	var activeTab = tabWrapper.find('.open');
	var activeTabHeight = activeTab.outerHeight();
	
	activeTab.show();
	tabWrapper.height(activeTabHeight);

	function tabInit() {
		clickedTab = $('.page-certificate-tabList .active');
		activeTab.fadeOut(300, function() {
			$('.page-certificate-tabInfo').removeClass('open');
			var clickedTabIndex = clickedTab.index();
					clickedTabImg = clickedTab.find('img').attr('src');
			$('.page-certificate-tabInfo').eq(clickedTabIndex).addClass('open');
			$('.page-certificate-tabInfo').eq(clickedTabIndex).css('background-image', 'url(' + clickedTabImg + ')');
			activeTab = $('.page-certificate-tabWrap .open');
			activeTabHeight = activeTab.outerHeight();
			scroll = $('.page-certificate-tabWrap').offset().top;
			$('html, body').animate({
				scrollTop: scroll
			}, 700);
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 300, function() {
				activeTab.delay(50).fadeIn(300);
			});
		});
	}
	tabInit();
	$('.page-certificate-tabList').on('click', '.page-certificate-tabItem', function() {
		$('.page-certificate-tabItem').removeClass('active');
		$(this).addClass('active');
		tabInit();
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
		if ($(this).width() <= 991) {
			$('.page-certificate-tabOrder').appendTo('.page-certificate-row');
		} else {
			$('.page-certificate-tabOrder').appendTo('.page-certificate-tabList');
		}
	});
	$(window).on('resize', function() {
		if ($(this).width() <= 1199) {
			$('.head-toggle').prependTo('.head-row');
		} else {
			$('.head-toggle').prependTo('.head');
		}
		if ($(this).width() <= 991) {
			$('.page-certificate-tabOrder').appendTo('.page-certificate-row');
		} else {
			$('.page-certificate-tabOrder').appendTo('.page-certificate-tabList');
		}
	});

	//

	// Preloader Event

	$(window).on('load', function() {
		$('.js-pulse').fadeOut();
		$('.js-preloader').delay(400).fadeOut('slow');
		$('.nav-menu').clone().prependTo('.page-nav');
		$('.foot-socials-list a').clone().appendTo('.page-socials');
	});

	//
	
});