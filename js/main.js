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


//------------------------------------------------------------------------Прокрутка при клике
//let buttons = document.querySelectorAll('.menu__link');
//
//buttons.forEach((elem)=>{
//  elem.addEventListener('click',()=>{
//    menuBody.classList.remove('_active');
//    burgerMenu.classList.remove('_active');
//  })
//})
//
//const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//
//if (menuLinks.length > 0) {
//  menuLinks.forEach(menuLink => {
//    menuLink.addEventListener("click", onMenuLinkClick);
//  });
//  function onMenuLinkClick(e) {
//    const menuLink = e.target;
//    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//        const gotoBlock = document.querySelector(menuLink.dataset.goto);
//        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
//      
//        window.scrollTo({
//        top:gotoBlockValue,
//        behavior: "smooth"
//      });
//      e.preventDefault();
//    }
//  }
//}
//------------------------------------------------------------------------Прокрутка при клике

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
//------------------------------------------------------------------------Слайдер

//----------------------------------------------------------------------фильтр

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
//----------------------------------------------------------------------фильтр

const titles = document.querySelectorAll('.accordion__title');

titles.forEach(item => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    // Изначально делаем активными все элементы
    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';

    // Добавляем обработчик клика
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





//-----------------------------------------------------------------------сортировка по атрибутам

//class FilterGallery {
//  
//  constructor() {
//    // Находим элементы меню и контейнер с постами
//    this.filterMenuList = document.querySelectorAll('.filtermenu__list li');
//    this.container = document.querySelector('.filtermenu__container');
//    this.posts = Array.from(this.container.querySelectorAll('.post'));  // Собираем все посты один раз в массив
//    
//    this.updateMenu('all');
//    this.filterMenuList.forEach(item => item.addEventListener('click', (event) => this.onClickFilterMenu(event)));
//  }
//
//  onClickFilterMenu(event) {
//    const target = event.target.closest('li');  // Используем closest чтобы найти li
//    const targetFilter = target.getAttribute('data-filter');
//
//    this.updateMenu(targetFilter);
//    this.updateGallery(targetFilter);
//  }
//
//  updateMenu(targetFilter) {
//    this.filterMenuList.forEach(item => item.classList.remove('active_'));
//    const activeItem = Array.from(this.filterMenuList).find(item => item.getAttribute('data-filter') === targetFilter);
//    if (activeItem) activeItem.classList.add('active_');
//  }
//
//  updateGallery(targetFilter) {
//    // Оптимизация через фильтрацию всех постов разом
//    const postsToShow = targetFilter === 'all'
//      ? this.posts
//      : this.posts.filter(post => post.classList.contains(targetFilter));
//    
//    const postsToHide = this.posts.filter(post => !postsToShow.includes(post));
//
//    // Анимация скрытия и показа
//    this.container.style.opacity = 0;
//    setTimeout(() => {
//      postsToHide.forEach(post => post.style.display = 'none');
//      postsToShow.forEach(post => post.style.display = '');
//      this.container.style.opacity = 1;
//    }, 300);
//  }
//}
//const filterGallery = new FilterGallery();


//-----------------------------------------------------------------------сортировка по атрибутам

//------------------------------------------------------------------------select выпадающий список
//document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
//  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
//  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
//  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
//  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
//
//  // Функция для закрытия текущего дропдауна
//  function closeCurrentDropdown() {
//    dropDownList.classList.remove('dropdown__list--active');
//    dropDownBtn.classList.remove('dropdown__button--active');
//  }
//
//  // Открыть/закрыть текущий дропдаун
//  dropDownBtn.addEventListener('click', function (e) {
//    e.stopPropagation(); // Остановить всплытие события
//    e.preventDefault(); // Предотвращаем отправку формы
//    const isActive = dropDownList.classList.contains('dropdown__list--active');
//
//    // Закрываем все дропдауны перед открытием текущего
//    document.querySelectorAll('.dropdown__list--active').forEach(function(activeList) {
//      activeList.classList.remove('dropdown__list--active');
//    });
//    document.querySelectorAll('.dropdown__button--active').forEach(function(activeButton) {
//      activeButton.classList.remove('dropdown__button--active');
//    });
//
//    // Если текущий дропдаун не был активным, открываем его
//    if (!isActive) {
//      dropDownList.classList.add('dropdown__list--active');
//      dropDownBtn.classList.add('dropdown__button--active');
//    }
//  });
//
//  // Выбор элемента списка
//  dropDownListItems.forEach(function (listItem) {
//    listItem.addEventListener('click', function (e) {
//      e.stopPropagation(); // Остановить всплытие события
//      e.preventDefault(); // Предотвращаем отправку формы
//      dropDownBtn.innerText = this.innerText;
//      dropDownBtn.focus();
//      dropDownInput.value = this.dataset.value;
//      closeCurrentDropdown(); // Закрываем текущий дропдаун после выбора
//    });
//  });
//
//  // Закрытие при клике снаружи
//  document.addEventListener('click', function (e) {
//    if (!dropDownWrapper.contains(e.target)) {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//
//  // Закрытие при нажатии Tab или Escape
//  document.addEventListener('keydown', function (e) {
//    if (e.key === 'Tab' || e.key === 'Escape') {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//});
//
//// Инициализация кнопки после загрузки
//function initMyButton() {
//  const myButton = document.getElementById('myButton');
//  
//  if (myButton && myButton.style.display !== 'none') {
//    myButton.addEventListener('click', function(event) {
//      event.preventDefault();
//    });
//  }
//}
//window.onload = initMyButton;

//------------------------------------------------------------------------select выпадающий список


//------------------------------------------------------------------------popup
//const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
//const lockPadding = document.querySelectorAll(".lock-padding");
//
//
//let unlock = true;
//
//const timeout = 800;
//
//if (popupLinks.length > 0) {
//  for (let index = 0; index < popupLinks.length; index++) {
//    const popupLink = popupLinks[index];
//    popupLink.addEventListener("click", function (e) {
//      const popupName = popupLink.getAttribute('href').replace('#', '');
//      const currentPopup = document.getElementById(popupName);
//      popupOpen(currentPopup);
//      e.preventDefault();
//    });
//  }
//}
//
//const popupCloseIcon = document.querySelectorAll('.close-popup');
//if (popupCloseIcon.length > 0) {
//  for (let index = 0; index < popupCloseIcon.length; index++) {
//    const el = popupCloseIcon[index];
//    el.addEventListener('click', function (e) {
//      popupClose(el.closest('.popup'));
//      e.preventDefault();
//    })
//  }
//}
//
//function popupOpen(currentPopup) {
//  if (currentPopup && unlock) {
//    const popupActive = document.querySelector('.popup.open');
//    if (popupActive) {
//      popupClose(popupActive, false);
//    } else {
//      bodyLock();
//    }
//    currentPopup.classList.add('open');
//    currentPopup.addEventListener("click", function (e) {
//      if (!e.target.closest('.popup__content')) {
//        popupClose(e.target.closest('.popup'));
//      }
//    });
//  }
//}
//
//function popupClose(popupActive, doUnlock = true) {
//  if (unlock) {
//    popupActive.classList.remove('open');
//    if (doUnlock) {
//      bodyUnlock();
//    }
//  }
//}
//
//function bodyLock() {
//  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//  if (lockPadding.length > 0) {
//    for (let index = 0; index < lockPadding.length; index++) {
//      const el = lockPadding[index];
//      el.style.paddingRight = lockPaddingValue;
//    }
//  }
//  body.style.paddingRight = lockPaddingValue;
//  body.classList.add('lock');
//
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//function bodyUnlock () {
//  setTimeout(function () {
//    if(lockPadding.length > 0) {
//      for (let index = 0; index < lockPadding.length; index++) {
//        const el = lockPadding[index];
//        el.style.paddingRight = '0px';
//      }
//  }
//    body.style.paddingRight = '0px';
//    body.classList.remove('lock');
//  }, timeout);
//  unlock = false;
//  setTimeout(function () {
//    unlock = true;
//  }, timeout);
//}
//
//document.addEventListener('keydown', function (e) {
//  if (e.which === 27) {
//    const popupActive = document.querySelector('.popup.open');
//    popupClose(popupActive);
//  }
//});
//------------------------------------------------------------------------popup


//------------------------------------------------------------------------Animation
//const animItems = document.querySelectorAll('._anim-items');
//if (animItems.length > 0) {
//  window.addEventListener('scroll', animOnScroll);
//  function animOnScroll() {
//    for (let index = 0; index < animItems.length; index++) {
//        const animItem = animItems[index];
//        const animItemHeight = animItem.offsetHeight;
//        const animItemOffset = offset(animItem).top;
//        const animStart = 5;
//
//        let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//        if (animItemHeight > window.innerHeight) {
//          animItemPoint = window.innerHeight - window.innerHeight / animStart;
//        }
//
//        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//          animItem.classList.add('_action');
//        } else {
//          animItem.classList.remove('_action');
//        }
//    }
//  }
//  function offset(el) {
//    const rect = el.getBoundingClientRect(),
//    scrollLeft  = window.pageXOffset || document.documentElement.scrollLeft,
//    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    return {top: rect.top + scrollTop, left: rect.left + screenLeft}
//  }
//  animOnScroll();
//}
//------------------------------------------------------------------------Animation

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
////------------------------------------------------------------------------Обработка форм

////------------------------------------------------------------------------настройка карты

////------------------------------------------------------------------------настройка карты
