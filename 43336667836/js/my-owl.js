let owl1 = $('.onm-cursos-slide-row.owl-carousel')
let btnNext = document.querySelector('.onm-cursos-slide-controle-wrap')

let owl2 = $('.onm-dep-slide-row.owl-carousel')

owl1.owlCarousel({
    //autoplay: true,
	lazyLoad: true,
	responsiveClass: true,
	dots:true,
	loop:true,
	lazyLoad:true,
	lazyLoadEager: 1,
	margin:20,
	nav:false,
	autoHeight: false,
	autoplayTimeout: 7000,
	smartSpeed: 850,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1250:{
			items:3
		},
		2000:{
			items:3
		}
	}
})

owl2.owlCarousel({
    //autoplay: true,
	lazyLoad: true,
	responsiveClass: true,
	dots:true,
	loop:true,
	lazyLoad:true,
	lazyLoadEager: 1,
	margin:20,
	nav:false,
	autoHeight: false,
	autoplayTimeout: 7000,
	smartSpeed: 850,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1250:{
			items:3
		},
		2000:{
			items:3
		}
	}
})

btnNext.addEventListener("click", () => owl1.trigger('next.owl.carousel'))