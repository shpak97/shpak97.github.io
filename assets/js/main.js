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
let slider = document.querySelector('#screen-what-next .container-slider');
if(slider) {
  let sliderpreviousElementSibling = slider.previousElementSibling;
  let leftMargin = sliderpreviousElementSibling.currentStyle || window.getComputedStyle(sliderpreviousElementSibling);
  if(window.innerWidth >= 992) {
    slider.style.marginLeft = leftMargin.marginLeft;
    slider.style.paddingLeft = leftMargin.paddingLeft;
  }else {
    slider.classList.remove('container-slider')
    slider.classList.add('container')
    slider.style.marginLeft = 'auto';
  }
  window.addEventListener(`resize`, event => {
    if(window.innerWidth >= 992) {
      slider.style.marginLeft = leftMargin.marginLeft;
    } else {
      slider.classList.remove('container-slider')
      slider.classList.add('container')
      slider.style.marginLeft = 'auto';
    }
  }, false);
}


