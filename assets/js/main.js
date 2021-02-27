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
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list.overview.people"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });
  $('#testimonials-people .slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots: false,
    nextArrow: false,
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          appendDots:$(".dots-list.testimonials.people"),
          variableWidth: false,
        }
      },
    ]
  });
  $('#whatsNew-people .slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    appendDots: false,
    nextArrow: false,
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          dots: true,
          appendDots:$(".dots-list.whatsNew.people"),
        }
      },
    ]
  });

  document.addEventListener('click', function (e){
    if (e.target.id === 'v-pills-overview-people') {
      $('#overview-people .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-testimonials-people') {
      $('#testimonials-people .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-whatsNew-people') {
      $('#whatsNew-people .slider').slick('refresh');
    }
  });

  $('#overview-process .slider').slick({
    infinite: true,
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
          variableWidth: false,
        }
      },
    ]
  });
  $('#testimonials-process .slider').slick({
    infinite: true,
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
          variableWidth: false,
        }
      },
    ]
  });
  $('#whatsNew-process .slider').slick({
    infinite: true,
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
          variableWidth: false,
        }
      },
    ]
  });

  document.addEventListener('click', function (e){
    if (e.target.id === 'v-pills-overview-process') {
      $('#overview-process .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-testimonials-process') {
      $('#testimonials-process .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-whatsNew-process') {
      $('#whatsNew-process .slider').slick('refresh');
    }
  });

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
            infinite:true,
            slidesToShow: 1,
            dots:true,
            variableWidth:false
          }
        },
      ]
    });
  $('#testimonials-product .slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots:false,
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
    dots: false,
    appendDots:$(".dots-list.whatsNew.product"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite:true,
          dots:true,
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });

  document.addEventListener('click', function (e){
    if (e.target.id === 'v-pills-overview-product') {
      let width = $('#screen-product .nav-pills').width();
      $('#overview-product .slider__card').width(width - 50)
    }
    if (e.target.id === 'v-pills-testimonials-product') {
      $('#testimonials-product .slider').slick('refresh');
      let width = $('#screen-product .nav-pills').width();
      $('#testimonials-product .slider__card').width(width - 50)
    }
    if (e.target.id === 'v-pills-whatsNew-product') {
      $('#whatsNew-product .slider').slick('refresh');
    }
  });

  $('#overview-advanced-manufacturing-technologies .slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list.overview.advanced-manufacturing-technologies"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          variableWidth:false
        }
      },
    ]
  });
  $('#testimonials-advanced-manufacturing-technologies .slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendDots:$(".dots-list.testimonials.advanced-manufacturing-technologies"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots:true,
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });
  $('#whatsNew-advanced-manufacturing-technologies .slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    appendDots:$(".dots-list.whatsNew.advanced-manufacturing-technologies"),
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });

  document.addEventListener('click', function (e){
    if (e.target.id === 'v-pills-overview-advanced-manufacturing-technologies') {
      $('#whatsNew-advanced-manufacturing-technologies .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-testimonials-advanced-manufacturing-technologies') {
      $('#testimonials-advanced-manufacturing-technologies .slider').slick('refresh');
    }
    if (e.target.id === 'v-pills-whatsNew-advanced-manufacturing-technologies') {
      $('#whatsNew-advanced-manufacturing-technologies .slider').slick('refresh');
    }
  });
});



