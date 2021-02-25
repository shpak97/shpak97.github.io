const arrowNextScreen = document.getElementById( 'arrow-nextPage' );
const firstScreen = document.getElementById( 'screen-first' );
if (arrowNextScreen) {
  arrowNextScreen.addEventListener('click', function (){
    window.location.hash="screen-advantages";
  });
}
jQuery(function($) {
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow:false,
    appendDots:$(".dots-list"),
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



