(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-hero-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-hero-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	shop-active-slider
	===========================*/
	$('.shop-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	service-active-slider
	===========================*/
	$('.service-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	testimony-active-slider
	===========================*/
	$('.testimony-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
	});

	// shop 
	const singleShopItem = document.querySelectorAll('.single-shop-item')
	singleShopItem.forEach(item => {
		item.children[0].style.borderColor = item.style.backgroundColor
	});

	// method area
	document.querySelectorAll('.method-img').forEach((item,index) => {
		item.children[1].innerHTML = index + 1
	});

	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	// ANOTHER-SERVICE-JS
	$('.feature-content > .row > div:nth-child(even), .work-time-box ul li:nth-child(even)').addClass('reverse-item');

	// customTab
	customTab(document.querySelectorAll('.product-detail-tab-link ul li'), document.querySelectorAll('.product-detail-tab-item'))
	customTab(document.querySelectorAll('.product-tab-link ul li'), document.querySelectorAll('.product-tab-item'))

	function customTab(links, tabs) {
		links.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove('active')
				}
				for (let i = 0; i < tabs.length; i++) {
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
	
			})
		});
	}

	const productTabLnks = document.querySelectorAll('.product-tab-link ul li')
	document.querySelectorAll('.product-tab-link ul').forEach(linkparent => {
		linkparent.appendChild(document.createElement("span")).classList.add('btn-shape-bg')
	});
	

	if ( window.matchMedia("(max-width: 767px)").matches) {
		productTabLnks.forEach((link, index) => {
			let x = 0;
			let btnShapeBg = link.parentElement.querySelector('.btn-shape-bg');
			if (link.classList.contains('active')) {
				for (let i = 0; i < index; i++) {
					x+= productTabLnks[i].offsetHeight
				}
				btnShapeBg.style.top = x + 'px'
				btnShapeBg.style.height = link.offsetHeight + 'px';
				btnShapeBg.style.width = link.offsetWidth + 'px';
			}
			link.addEventListener('click', ()=>{
				x = 0;
				for (let i = 0; i < index; i++) {
					x+= productTabLnks[i].offsetHeight
				}
				btnShapeBg.style.top = x + 'px'
				btnShapeBg.style.height = link.offsetHeight + 'px';
				btnShapeBg.style.width = link.offsetWidth + 'px';
			})
		});
	}else{
		productTabLnks.forEach((link, index) => {
			let x = 0;
			let btnShapeBg = link.parentElement.querySelector('.btn-shape-bg');
			if (link.classList.contains('active')) {
				for (let i = 0; i < index; i++) {
					x+= productTabLnks[i].offsetWidth
				}
				btnShapeBg.style.left = x + 'px'
				btnShapeBg.style.height = link.offsetHeight + 'px';
				btnShapeBg.style.width = link.offsetWidth + 'px';
			}
			link.addEventListener('click', ()=>{
				x = 0;
				for (let i = 0; i < index; i++) {
					x+= productTabLnks[i].offsetWidth;
				}
				btnShapeBg.style.left = x + 'px';
				btnShapeBg.style.height = link.offsetHeight + 'px';
				btnShapeBg.style.width = link.offsetWidth + 'px';
			})
		});
	}

	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

		// sticky

		var wind = $(window);
		var sticky = $('.header-content-wrap');
		wind.on('load', function () {
			sticky.prev().height(sticky.outerHeight())
		})
		wind.on('resize', function () {
			sticky.prev().height(sticky.outerHeight())
		})
		wind.on('scroll', function () {
			var scroll = wind.scrollTop();
			if (scroll < 150) {
				sticky.removeClass('sticky');
			} else {
				sticky.addClass('sticky');
			}
		});
		
	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	
})(jQuery);