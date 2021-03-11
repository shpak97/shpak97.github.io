
jQuery(function($) {

  // const filterHover =  $('.screen-filter-dropdown');
  // const filterBtn = document.getElementById('filterBtn')
  // filterHover.hover(function(){
  //   filterBtn.click();
  // });

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
      autoplay: true,
      autoplaySpeed: 5000,
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
      autoplay: true,
      autoplaySpeed: 5000,
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
      autoplay: true,
      autoplaySpeed: 5000,
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
      autoplay: true,
      autoplaySpeed: 5000,
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
      autoplay: true,
      autoplaySpeed: 5000,
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

    document.querySelector('#v-pills-whatsNew-advanced-manufacturing-technologies').addEventListener('shown.bs.tab', function (event) {
      $('#whatsNew-advanced-manufacturing-technologies .slider').slick('setPosition');
    })

    $('#talent-pipeline-slider .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      nextArrow: '<div class="arrow-nextSlide"></div>',
      prevArrow:false,
      appendDots:$(".dots-list.talent-pipeline-slider-dots"),
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

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
  //================================ FILTER BY MONTH FOR BLOG ================================//

  const monthsBtn = document.querySelectorAll('.screen-filter-month__item');
  const monthsSlide = document.querySelectorAll('.slider__blog-date');
  if(monthsBtn) {
    monthsBtn.forEach(monthBtn => {
      monthBtn.addEventListener('click', ()=> {
        const monthAtr = monthBtn.getAttribute('data-month-to');
        const monthsSlideAttr =  monthsSlide[monthAtr].getAttribute('data-slick-index');
        $( '#blog-slider .slider' ).slick('slickGoTo', monthsSlideAttr);
      })
    })
  }
  $('#test').on('click', function () {
    $( '#blog-slider .slider' ).slick('slickGoTo', 5);
  })
});
// Scrolling
const sections = document.querySelectorAll('section[id]');
document.body.onload = loadingPage;
function loadingPage() {
  if(document.getElementById("scrollingList")) {
    addScrolling();
  }
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



function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')
    if(document.querySelector('.scrolling__list a[href*=' + sectionId + ']')) {
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.scrolling__list a[href*=' + sectionId + ']').classList.add('active')
      }else{
        document.querySelector('.scrolling__list a[href*=' + sectionId + ']').classList.remove('active')
      }
    }
  })
}


//========= Slider changing
const blog = document.getElementById('page-blog');
if (blog) {
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("slider__blog-card");
    if (c == "all") c = "";
    console.log(c)
    // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }

// Показать отфильтрованные элементы
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

// Скрыть элементы, которые не выбраны
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  var btnContainer = document.getElementById("filter-btns");
  var btns = btnContainer.getElementsByClassName("dropdown-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activeFilterBtn");
      current[0].className = current[0].className.replace(" activeFilterBtn", "");
      this.className += " activeFilterBtn";
    });
  }
}





//========= Services data changing
const services = document.querySelector('#page-services');
if(services) {
  const screens = ['people']
  screens.forEach(item => {
    servicesSelection(item)
  })
  function servicesSelection(screenName) {
    const screen = document.querySelector('#screen-' + screenName);
    const blocksData = screen.querySelectorAll('.section__data');
    const btns = screen.querySelectorAll('#v-pills-tab-' + screenName + '> button');
    btns.forEach(btn => {
      btn.addEventListener('click', ()=> {
        const target = btn.id;
        blocksData.forEach(data => {
          if(data.classList.contains(target)) {
            data.classList.add('show')
          } else {
            data.classList.remove('show')
          }
        })
      })
    })

  }
}
