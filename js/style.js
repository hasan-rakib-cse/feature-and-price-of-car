// let span = document.getElementsByTagName('span');
// let product = document.getElementsByClassName('product');
// let product_page = Math.ceil(product.length / 4);
// let l = 0;
// let movePer = 25.34;
// let maxMove = 203;
// let mob_view = window.matchMedia('(max-width: 768px)');
// if(mob_view.matches) {
//     movePer = 50.36;
//     maxMove = 504;
// }

// let right_mover = () => {
//     l = l + movePer;
//     if(product == l) {
//         l = 0;
//     }
//     for(const i of product) {
//         if(l > maxMove) {
//             l = l - movePer;
//         }
//         i.style.left = '-' + l + '%';
//     }
// };

// let left_mover = () => {
//     l = l - movePer;
//     if(l <= 0) {
//         l = 0;
//     }
//     for(const i of product) {
//         if(product_page > 1) {
//             i.style.left = '-' + l + '%';
//         }
//     }
// };
// span[1].onclick = () => {
//     right_mover();
// };
// span[0].onclick = () => {
//     left_mover();
// };

/* -------------------------------------
		PRODUCT SLIDER
-------------------------------------- */

var _figmaProductSlider = jQuery('.product-slider');
    _figmaProductSlider.owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		responsiveClass: true,
        autoplay: false,
        margin: 10,
        navText: ["<img src='images/icons/arrowLeft.png'>","<img src='images/icons/arrowRight.png'>"],
		navClass: [
			'sliderImgLeft',
			'sliderImgRight'
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			640: {
				items: 1,
				nav: true,
			},
			767: {
				items: 2,
				nav: true,
			},
			991: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 4,
				nav: true,
			}
		}
	});


/* -------------------------------------
	LOGO SLIDER
-------------------------------------- */

var _logotSlider = jQuery('.logo-slider');
_logotSlider.owlCarousel({
	loop: true,
	autoplay: true,
	responsiveClass: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	margin: 20,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		640: {
			items: 1,
			nav: true,
		},
		767: {
			items: 3,
			nav: true,
		},
		1200: {
			items: 6,
			nav: true,
		}
	}
});