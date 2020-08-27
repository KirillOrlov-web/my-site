$(document).ready(function () {

  $('.popup-callback__btn-show').on('click', function () {
    $('.popup-callback').css({
      'display': 'block'
    });
    $('body').css({
      'overflow': 'hidden'
    })
  });
  $('.popup-callback').on('click', function (event) {
    if (event.target == this) {
      $(this).css({
        'display': 'none'
      })
      $('body').css({
        'overflow': 'visible'
      })
    };
  });


  $('#popup-callback__phone').inputmask({ "mask": "+7 (999) 999-99-99" });


  $('.elements-cost').addClass('elements--active');
  $('.elements-developer').addClass('elements--active');


  $('.starting-line__show-menu').on('click', function () {
    $('.starting-line__menu').toggleClass('starting-line__menu--is-visible');
    $(this).toggleClass('starting-line__hide-menu');
  });
  $('.menu-header__link').on('click', function () {
    $('.starting-line__menu').removeClass('starting-line__menu--is-visible')
    $('.starting-line__show-menu').removeClass('starting-line__hide-menu');
  });


  $('.menu-header__link, .menu-footer__link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;
    $('body,html').animate({
      scrollTop: offset,
    }, 700);
  });



  new Swiper('.slider-portfolio', {
    slidesPerView: '1',
    spaceBetween: 20,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    wrapperClass: 'slider-portfolio__list',
    slideClass: 'slider-portfolio__item',
    pagination: {
      el: '.slider-portfolio__pagination',
      type: 'bullets',
      bulletClass: 'paginator-portfolio__item',
      bulletActiveClass: 'paginator-portfolio__item--active',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-portfolio__button--next',
      prevEl: '.slider-portfolio__button--prev',
    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

  });

  var handleMatchMedia = function (mediaQuery) {
    if (mediaQuery.matches) {
      $('.footer__request-a-call').removeClass('button--pink'),
        $('.footer__request-a-call').addClass('button--orange');
    } else {
      $('.footer__request-a-call').removeClass('button--orange'),
        $('.footer__request-a-call').addClass('button--pink');
    }
  },
    mql = window.matchMedia('all and (max-width: 768px)');
  handleMatchMedia(mql);
  mql.addListener(handleMatchMedia);

  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', '../mail.php', true);
        xhr.send(formData);

        form.reset();

        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      }
    });
  }

  validateForms('.popup-callback__form', { name: {required: true}, phone: {required: true} }, '.thanks-popup', 'send goal');



});
