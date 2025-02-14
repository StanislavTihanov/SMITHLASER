"use strict"
//------------------------------------------------------------------------Готовые блоки кода

//------------------------------------------------------------------------search
document.querySelectorAll('.search').forEach(button => {
  button.addEventListener('click', (event) => {
      event.stopPropagation(); // Останавливаем всплытие события
      button.classList.add('_act');
  });
});

document.querySelectorAll('.search__block-close').forEach(closeButton => {
  closeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Останавливаем всплытие события
      closeButton.closest('.search').classList.remove('_act'); // Удаляем _act у ближайшего .search
  });
});
//------------------------------------------------------------------------search

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его

//------------------------------------------------------------------------Слайдер
const mainSlider = document.querySelector('.main-slider');
if (mainSlider) {
  new Swiper(mainSlider, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
const aboutSlider = document.querySelector('.about-slider');
if (aboutSlider) {
  new Swiper(aboutSlider, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    speed: 1000,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
     320: {
       slidesPerView: 1,
     },
     640: {
       slidesPerView: 2,
     },
   }
  });
}
const productSliders = document.querySelectorAll('.product-slider');
productSliders.forEach((slider, index) => {
  new Swiper(slider, {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: `.swiper-button-next-${index}`,
      prevEl: `.swiper-button-prev-${index}`,
    },
    pagination: {
      el: `.swiper-pagination-${index}`,
      clickable: true,
    },
  });
});

//------------------------------------------------------------------------Слайде
//------------------------------------------------------------------------Fancybox
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Fancybox !== "undefined" && typeof Fancybox.bind === "function") {
      Fancybox.bind("[data-fancybox]", {
          // Кастомные опции
      });
  }
});
//------------------------------------------------------------------------Fancybox
//----------------------------------------------------------------------фильтр
//----------------------------------------------------------------------кнопка открытия и закрытия фильтра
document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector('.filter__button');
  const filter = document.querySelector('.filter');

  if (filterButton && filter) {
      filterButton.addEventListener('click', () => {
          filter.classList.toggle('open');
      });
  }
});
//----------------------------------------------------------------------кнопка открытия и закрытия фильтра
//----------------------------------------------------------------------ползунки для фильтра
document.addEventListener("DOMContentLoaded", function () {
  let slider1 = document.getElementById('slider1');
  let minInput = document.getElementById('minInput1');
  let maxInput = document.getElementById('maxInput1');

  if (slider1 && minInput && maxInput) {
      noUiSlider.create(slider1, {
          start: [10000, 90000], // Начальные значения ползунка (но не input)
          connect: true,
          range: {
              'min': 1,
              'max': 100000
          },
          step: 1,
          format: {
              to: value => Math.round(value),
              from: value => Number(value)
          }
      });
      // Очищаем input после создания слайдера
      setTimeout(() => {
          minInput.value = "";
          maxInput.value = "";
      }, 0);
      // Обновление input при изменении ползунка (значения появляются только после движения)
      slider1.noUiSlider.on('update', function (values, handle) {
          if (handle === 0 && document.activeElement !== minInput) {
              minInput.value = values[0];
          }
          if (handle === 1 && document.activeElement !== maxInput) {
              maxInput.value = values[1];
          }
      });
      // Обновление ползунка при вводе значений вручную
      minInput.addEventListener('change', function () {
          slider1.noUiSlider.set([this.value || 1, null]);
      });

      maxInput.addEventListener('change', function () {
          slider1.noUiSlider.set([null, this.value || 100]);
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  let slider2 = document.getElementById('slider2');
  let minInput = document.getElementById('minInput2');
  let maxInput = document.getElementById('maxInput2');

  if (slider2 && minInput && maxInput) {
      noUiSlider.create(slider2, {
          start: [50, 450], // Начальные значения ползунка (но не input)
          connect: true,
          range: {
              'min': 1,
              'max': 500
          },
          step: 1,
          format: {
              to: value => Math.round(value),
              from: value => Number(value)
          }
      });
      // Очищаем input после создания слайдера
      setTimeout(() => {
          minInput.value = "";
          maxInput.value = "";
      }, 0);
      // Обновление input при изменении ползунка (значения появляются только после движения)
      slider2.noUiSlider.on('update', function (values, handle) {
          if (handle === 0 && document.activeElement !== minInput) {
              minInput.value = values[0];
          }
          if (handle === 1 && document.activeElement !== maxInput) {
              maxInput.value = values[1];
          }
      });
      // Обновление ползунка при вводе значений вручную
      minInput.addEventListener('change', function () {
          slider2.noUiSlider.set([this.value || 1, null]);
      });

      maxInput.addEventListener('change', function () {
          slider2.noUiSlider.set([null, this.value || 100]);
      });
  }
});
//----------------------------------------------------------------------ползунки для фильтра

//----------------------------------------------------------------------Аккардион который в фильтре
const titles = document.querySelectorAll('.accordion__title');

titles.forEach(item => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    item.classList.add('active');
    activeContent.classList.add('active');

    // Небольшая задержка, чтобы дать браузеру отобразить блок
    setTimeout(() => {
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }, 50);

    item.addEventListener('click', () => {
        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    });
});

//----------------------------------------------------------------------Аккардион который в фильтре
//----------------------------------------------------------------------фильтр
//------------------------------------------------------------------------Обработка формы
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form'); // Получаем все формы на странице

  forms.forEach((form) => {
      const phoneInputs = document.querySelectorAll('._number');
    
      phoneInputs.forEach((phoneInput) => {
        const mask = IMask(phoneInput, { mask: '+7 (000) 000-00-00' });
    
        phoneInput.addEventListener('focus', () => {
          if (!phoneInput.value) {
            mask.value = '+7() ';
          }
        });
    
        phoneInput.addEventListener('blur', () => {
          if (mask.unmaskedValue.length < 2) {
            mask.value = '';
          }
        });
      });

    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
      let formData = new FormData(form);

      const formImage = form.querySelector('#formImage');
      if (formImage && formImage.files[0]) {
        formData.append('image', formImage.files[0]);
      }
      if (error === 0) {
        form.classList.add('_sending');
      }
    }

    function formValidate(form) {
      let error = 0;
      let formReq = form.querySelectorAll('._req');

      formReq.forEach((input) => {
        formRemoveError(input);

        if (input.classList.contains('_email')) {

        } else if (input.classList.contains('_number')) {
          if (!phoneTest(input)) { // проверка на корректность телефона
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
          formAddError(input);
          error++;
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      });
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    
      // Ищем элемент с классом form__error внутри контейнера родителя
      const errorSpan = input.parentElement.querySelector('.form__error');
      if (errorSpan) {
        errorSpan.classList.add('view'); // Добавляем класс view
      }
    }
    
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    
      // Ищем элемент с классом form__error внутри контейнера родителя
      const errorSpan = input.parentElement.querySelector('.form__error');
      if (errorSpan) {
        errorSpan.classList.remove('view'); // Удаляем класс view
      }
    }
    
    // проверка телефона
    function phoneTest(input) {
      return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(input.value);
    }

  });
});
//------------------------------------------------------------------------Обработка форм


//---------------------------------------------------убираем прыгающий хедер при открытии Fancybox
document.addEventListener("DOMContentLoaded", function () {
  const fancyboxElements = document.querySelectorAll("[data-fancybox]");

  if (fancyboxElements.length > 0) { // Проверяем, есть ли такие элементы на странице
      let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);

      Fancybox.bind("[data-fancybox]", {
          on: {
              init: () => document.querySelector("header").classList.add("fix-margin"),
              destroy: () => document.querySelector("header").classList.remove("fix-margin"),
          }
      });
  }
});
//---------------------------------------------------убираем прыгающий хедер при открытии Fancybox

