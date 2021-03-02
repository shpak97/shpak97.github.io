const arrowNextScreen = document.getElementById( 'arrow-nextPage' );
if (arrowNextScreen) {
  arrowNextScreen.addEventListener('click', function (){
    window.location.hash="screen-advantages";
  });
}
jQuery(function($) {
  const filterHover = $('.screen-filter-dropdown');
  const filterBtn = document.getElementById('filterBtn')
  filterHover.hover(function(){
    filterBtn.click();
  });
  const services = document.getElementById("page-services");
  console.log(services)
  if(services) {
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
          breakpoint: 1200,
          settings: {
            arrow:false,
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
          breakpoint: 1200,
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
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            dots: true,
            appendDots:$(".dots-list.whatsNew.people"),
          }
        },
      ]
    });
    document.querySelector('#v-pills-overview-people').addEventListener('shown.bs.tab', function (event) {
      $('#overview-people .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-testimonials-people').addEventListener('shown.bs.tab', function (event) {
      $('#testimonials-people .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-whatsNew-people').addEventListener('shown.bs.tab', function (event) {
      $('#whatsNew-people .slider').slick('setPosition');
    })


    $('#overview-process .slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      appendDots:$(".dots-list.overview.process"),
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots:true,
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
      dots:false,
      appendDots:$(".dots-list.testimonials.process"),
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
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
      dots: false,
      appendDots:$(".dots-list.whatsNew.process"),
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            dots: true,
          }
        },
      ]
    });
    document.querySelector('#v-pills-overview-process').addEventListener('shown.bs.tab', function (event) {
      $('#overview-process .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-testimonials-process').addEventListener('shown.bs.tab', function (event) {
      $('#testimonials-process .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-whatsNew-process').addEventListener('shown.bs.tab', function (event) {
      $('#whatsNew-process .slider').slick('setPosition');
    })

    $('#overview-product .slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      nextArrow: false,
      prevArrow:false,
      appendDots:$(".dots-list.overview.product"),
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
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
          breakpoint: 1200,
          settings: {
            variableWidth: false,
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
          breakpoint: 1200,
          settings: {
            variableWidth: false,
            infinite:true,
            dots:true,
            slidesToShow: 1,
          }
        },
      ]
    });
    document.querySelector('#v-pills-overview-product').addEventListener('shown.bs.tab', function (event) {
      $('#overview-product .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-testimonials-product').addEventListener('shown.bs.tab', function (event) {
      $('#testimonials-product .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-whatsNew-product').addEventListener('shown.bs.tab', function (event) {
      $('#whatsNew-product .slider').slick('setPosition');
    })

    $('#overview-advanced-manufacturing-technologies .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      appendDots:$(".dots-list.overview.advanced-manufacturing-technologies"),
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
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
      dots: true,
      appendDots:$(".dots-list.testimonials.advanced-manufacturing-technologies"),
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
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
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          }
        },
      ]
    });

    document.querySelector('#v-pills-overview-advanced-manufacturing-technologies').addEventListener('shown.bs.tab', function (event) {
      $('#overview-advanced-manufacturing-technologies .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-testimonials-advanced-manufacturing-technologies').addEventListener('shown.bs.tab', function (event) {
      $('#testimonials-advanced-manufacturing-technologies .slider').slick('setPosition');
    })
    document.querySelector('#v-pills-whatsNew-advanced-manufacturing-technologies').addEventListener('shown.bs.tab', function (event) {
      $('#whatsNew-advanced-manufacturing-technologies .slider').slick('setPosition');
    })
  }

});



