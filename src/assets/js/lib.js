
// active class switching btns

$('.btns').on('click', '.btn', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

// open/close nav

$(document).ready(function () {
  $(".burger").click(function (e) {
      $(".burger__line,.header__nav").toggleClass('active');
      $("body").toggleClass('lock');
  })
});


// active class switching btns

$('.header__btns').on('click', '.btn', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


// scroll-anchors-smooth

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
      event.preventDefault()
      let blockID = anchor.getAttribute('href')
      document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: 'start'
      })
  })
}














//  initialize swiper

const swiper = new Swiper('.swiper-container', {

    loop: true,



    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }


  });


  // Initializing popup

  $(document).ready(function() {
    $('.room__gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
  });







