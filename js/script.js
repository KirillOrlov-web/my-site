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


  const fileInput = document.querySelector('input[type="file"]');

  fileInput.addEventListener('change', (e) => {
    let files = e.currentTarget.files;
    console.log(files);

    if (files.length) {
      fileInput.closest('label').querySelector('span').textContent = files[0].name;
    } else {
      fileInput.closest('label').querySelector('span').textContent = 'Выбрать файл';
    }

  });


  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  let selector2 = document.querySelector('input[type="tel"]');

  selector2.addEventListener('input', function(){
    console.log(selector2.value)


    const re = /^\d*(\.\d+)?$/

    console.log(selector2.value.match(/[0-9]/g).length)


    console.log(selector2.value.replace(/[0-9]/g, "0"));

  });


  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: {
          required: 'Укажите имя'
        },
        phone: {
          required: 'Введите телефон'
        }
      },
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

        fileInput.closest('label').querySelector('span').textContent = 'Выбрать файл';
      }
    });
  }

  validateForms('.popup-callback__form', { name: {required: true}, phone: {required: true} }, '.thanks-popup', 'send goal');



});
