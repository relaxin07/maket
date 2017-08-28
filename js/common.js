$(function(){
	$(".main-carousel").owlCarousel({
		nav: true,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1
	});

	$(".popular-prod-container-slider").owlCarousel({
		nav: true,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.main-menu').slideToggle("slow", function(){
		});
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>54){
			$(".main-block").addClass('fixed');
			$(".main-block > .container").addClass('menu-fixed');
			
		}
		else if($(this).scrollTop()<54){
			$(".main-block").removeClass('fixed');
			$(".main-block .container").removeClass('menu-fixed');

		}
	});

	




});