const arrowNextScreen = document.getElementById( 'arrow-nextPage' );
const firstScreen = document.getElementById( 'screen-first' );
if (arrowNextScreen) {
  arrowNextScreen.addEventListener('click', function (){
    window.location.hash="screen-advantages";
  });
}
jQuery(function($) {
  $('#screen-what-next .slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('#overview-people .slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list.overview.people"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#testimonials-people .slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.testimonials.people"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#whatsNew-people .slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.whatsNew.people"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('#overview-process .slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list.overview.process"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#testimonials-process .slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.testimonials.process"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#whatsNew-process .slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.whatsNew.process"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });+

  $('#overview-product .slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
        nextArrow: false,
        prevArrow:false,
        appendDots:$(".dots-list.overview.product"),
        variableWidth: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
  });
  $('#testimonials-product .slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.testimonials.product"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#whatsNew-product .slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.whatsNew.product"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});



