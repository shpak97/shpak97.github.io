
jQuery(function($) {

const filterHover =  $('.screen-filter-dropdown');
const filterBtn = document.getElementById('filterBtn')
filterHover.hover(function(){
  filterBtn.click();
});

const aboutPage = document.getElementById("page-about");
if(aboutPage) {
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
}

const servicesPage = document.getElementById("page-services");
if(servicesPage) {
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

// blog-slider
const blogPage = document.getElementById("page-blog");
if(blogPage) {
  $('#blog-slider .slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: '<div class="arrow-nextSlide"></div>',
    prevArrow: '<div class="arrow-prevSlide"></div>',
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
}
const industriesPage = document.getElementById('page-industries')
if(industriesPage) {
    $('#screen-funding-source .slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      centerMode: false,
      centerPadding: '20%',
      appendArrows: $('.wrap-btn'),
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      appendDots: $('.slick-slider-dots')
    });
    $('#screen-clients .slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      centerMode: false,
      centerPadding: '20%',
      appendArrows: $('.clients .wrap-btn'),
      prevArrow: $('.clients .prev'),
      nextArrow: $('.clients .next'),
      appendDots: $('.clients .slick-slider-dots'),
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>'+(i+1)+'</a>';
      },
    });
  }

});
// Scrolling
const sections = document.querySelectorAll('section[id]');
document.body.onload = loadingPage;
function loadingPage() {
  addScrolling();
  setNextPage();
}
function addScrolling() {

  for (let i = 1; i<sections.length; i++ ) {
    let my_div = document.getElementById("scrollingList");
    let newLink = document.createElement("li");
    newLink.innerHTML = `<a href=\"#${sections[i].id}\" class=\"scrolling-item\"></a>`;
    my_div.appendChild(newLink);
  }
  window.addEventListener('scroll', scrollActive)

}

function setNextPage() {
  const arrowNextPage = document.getElementById('arrow-nextPage');

  if (arrowNextPage) {
      const nextSection = sections[1].id;
      const href = `#${nextSection}`;
      arrowNextPage.setAttribute('href', href);
  }
}

const arrowNextScreen = document.getElementById( 'arrow-nextPage' );
if (arrowNextScreen) {

}


function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.scrolling__list a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.scrolling__list a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}


