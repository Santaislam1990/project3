//>> Main Menu <<//
//menu header bar
$(".header-bar").on("click", function (e) {
  $(".main-menu, .header-bar").toggleClass("active");
});
$(".main-menu li a").on("click", function (e) {
  var element = $(this).parent("li");
  if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300, "swing");
  } else {
      element.addClass("open");
      element.children("ul").slideDown(300, "swing");
      element.siblings("li").children("ul").slideUp(300, "swing");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp(300, "swing");
  }
});
//menu header bar
//menu top fixed bar
var fixed_top = $(".header-section");
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 220) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
      fixed_top.removeClass("slideInUp");
      $("body").addClass("body-padding");
  } else {
      fixed_top.removeClass("menu-fixed fadeInDown");
      fixed_top.addClass("slideInUp");
      $("body").removeClass("body-padding");
  }
});
//menu top fixed bar
"user strict";
//>> Main Menu <<//
//search-area-start-here
var $searchWrap = $(".search-wrap");
var $navSearch = $(".nav-search");
var $searchClose = $("#search-close");

$(".search-trigger").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).addClass("open");
});

$(".search-close").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
}

$(document.body).on("click", function (e) {
    closeSearch();
});

$(".search-trigger, .main-search-input").on("click", function (e) {
    e.stopPropagation();
});
//search-area-end-here//

// banner-slide two area start here//
var sliderActive1 = ".banner__slider";
var sliderInit1 = new Swiper(sliderActive1, {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  speed: 4500,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".banner-dot",
    clickable: true,
  },
});
// banner-slide two area end here//
	// content animation when active slider js start here
	function animated_swiper(selector, init) {
		var animated = function animated() {
			$(selector + " [data-animation]").each(function () {
				var anim = $(this).data("animation");
				var delay = $(this).data("delay");
				var duration = $(this).data("duration");
				$(this)
					.removeClass("anim" + anim)
					.addClass(anim + " animated")
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					})
					.one("animationend", function () {
						$(this).removeClass(anim + " animated");
					});
			});
		};
		animated();
		init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		});
		init.on("slideChange", animated);
	}
	animated_swiper(sliderActive1, sliderInit1);
	// content animation when active slider js end here
// Banner one slider area start here ***
  var sliderActive2 = " .banner-slider";
  var sliderInit2 = new Swiper(sliderActive2, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
          delay: 7000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".arry__prev",
          prevEl: ".arry__next",
      },
  });
  // Here this is use for animate ***
  function animated_swiper(selector, init) {
    var animated = function animated() {
        $(selector + " [data-animation]").each(function () {
            var anim = $(this).data("animation");
            var delay = $(this).data("delay");
            var duration = $(this).data("duration");
            $(this)
                .removeClass("anim" + anim)
                .addClass(anim + " animated")
                .css({
                    webkitAnimationDelay: delay,
                    animationDelay: delay,
                    webkitAnimationDuration: duration,
                    animationDuration: duration,
                })
                .one("animationend", function () {
                    $(this).removeClass(anim + " animated");
                });
        });
    };
    animated();
    init.on("slideChange", function () {
        $(sliderActive2 + " [data-animation]").removeClass("animated");
    });
    init.on("slideChange", animated);
}
animated_swiper(sliderActive2, sliderInit2);
// Banner one slider area end here ***

if ($('.blog__slider').length > 0) {
          const articleSlider = new Swiper(".blog__slider", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autopla: {
            delay: 2000,
            disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

 /*---------- Counter Section ----------*/
     $(document).ready(function(){
  counter(); // call counter function
     
     function counter() {
      $('.num').each(function () {
          $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
          }, {
              duration: 5000
              , easing: 'swing'
              , step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      setTimeout(counter, 8000); // for repeating every : 8sec - 5sec = 3sec
  }
         });
/*---------- Counter Section ----------*/

 //>> Project Hover Js Start <<//
        const getSlide = $('.main-box, .box').length - 1;
        const slideCal = 100 / getSlide + '%';

        $('.box').css({
            "width": slideCal
        });

        $('.box').hover(function() {
            $('.box').removeClass('active');
            $(this).addClass('active');
        });

        //>> Project Slider Start <<//
        if ($('.project-slide').length > 0) {
          const projectSlide = new Swiper(".project-slide", {
              spaceBetween: 30,
              speed: 2000,
              loop: true,
              centeredSlides: true,
              autoplay: {
                  delay: 2000,
                  disableOnInteraction: false,
              },
              breakpoints: {
                  1199: {
                      slidesPerView: 3,
                  },
                  991: {
                      slidesPerView: 2,
                  },
                  767: {
                      slidesPerView: 2,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              },
          });
      }

//>> Project Slider end <<//
//testi-slide-area-start-here//
var swiper = new Swiper(".testi-slide", {
  spaceBetween: 30,
  speed: 1500,
loop: "true",
slidesPerView: 2,
autoplay: true,
pagination: {
el: ".dot",
clickable: true,
},
breakpoints: {
    275: {
        slidesPerView: 1,
    },
    575: {
        slidesPerView: 1,
    },
    767: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 2,
    },
  },
});


var swiper = new Swiper(".testi-wrapper", {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  centeredSlides: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
  },
breakpoints: {
  575: {
      slidesPerView: 1,
  },
  992: {
      slidesPerView: 3,
  },
},
});


var swiper = new Swiper(".testi-slider", {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
  },
breakpoints: {
  575: {
      slidesPerView: 1,
  },
  992: {
      slidesPerView: 3,
  },
},
});
//testi-slide-area-end-here
// wow animation
new WOW().init();

/*---------- tab Section ----------*/
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
/*---------- tab Section ----------*/
//shop single swiper slider area start here//
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".right-arry",
    prevEl: ".left-arry",
},
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".right-arry",
    prevEl: ".left-arry",
},
  thumbs: {
    swiper: swiper,
  },
});
// shop single swiper slider area end here//

// cart
let quantity = 0;
let price = 0;
$(".cart-item-quantity-amount, .product-quant").html(quantity);
$(".total-price, .product-pri").html(price.toFixed(2));
$(".cart-increment, .cart-incre").on("click", function() {
    if (quantity <= 4) {
        quantity++;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        var basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
    }
});

$(".cart-decrement, .cart-decre").on("click", function() {
    if (quantity >= 1) {
        quantity--;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        var basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
    }
});

$(".cart-item-remove>a").on("click", function() {
    $(this).closest(".cart-item").hide(300);
});
// cart
/*---------- accordion Section ----------*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});
/*---------- accordion Section ----------*/





















  