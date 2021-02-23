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
  });
});

