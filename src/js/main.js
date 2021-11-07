
$(document).ready(function(){
  $('.variable-width').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button class="slide-arrow slick-prev"><img src="images/icon-carousel-prev.png"></button>',
    nextArrow: '<button class="slide-arrow slick-next"><img src="images/icon-carousel-next.png"></button>'
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav',
    lazyLoad: 'ondemand',
    prevArrow: '<button class="slide-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow slick-next"><i class="fas fa-chevron-right"></i></button>'
  });
	$('.slider-x').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav',
    lazyLoad: 'ondemand',
    dots: false
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    prevArrow: '<button class="slide-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow slick-next"><i class="fas fa-chevron-right"></i></button>'
  });          




});