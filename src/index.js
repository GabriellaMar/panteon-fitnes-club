import './css/styles.css';
import Notiflix from 'notiflix';
import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

import * as basicLightbox from 'basiclightbox'

// const currentService = document.querySelectorAll('.service-item');

const serviceItems = document.querySelectorAll('.service-item');

for (const item of serviceItems) {
  item.addEventListener('click', onServiceItemClick);
}

function onServiceItemClick(event) {
    const currentService = event.target.closest('.service-item');
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.classList.remove('current-service');
    });
    currentService.classList.add('current-service');
  }

//========================================

//========================================
//  const swiper = new Swiper(".mySwiper", {
//    slidesPerView: 4,
//   //  centeredSlides: false,
//    spaceBetween: 0,
//   //  loop: true,
//   //  loopedSlides: 4,
//   //  slidesPerGroup: 1, // Кожен слайд окремо
//    grabCursor: true,
//    keyboard: {
//        enabled: true,
//   },
//     breakpoints: {
//       1440: {
//        slidesPerView: 4,
//       //  slidesPerGroup: 1,
//       },
//       768: {
//         slidesPerView: 2,
//        //  slidesPerGroup: 1,
//        },
//     },

//    scrollbar: {
//      el: ".swiper-scrollbar",
//       draggable: true,
//     //  snapOnRelease: false,
//    },
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },

//  });
//  const secondSwiper = new Swiper(".swiper-container", {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   grabCursor: true,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     1440: {
//       slidesPerView: 4,
//     },
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//    //  snapOnRelease: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// }
//  )

const swiper = new Swiper(".trainers-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
   
  },

  freeMode: true,
    speed: 1500,

    autoplay: {
      delay: 2000,
    },
  
  loop: true,
    // Дозволяємо циклічний перехід слайдів
  // autoplay: {
  //   delay: 5000, // Затримка між переходами у мілісекундах
  //   disableOnInteraction: false, // Вимкнути автоматичний рух при взаємодії користувача
  // },
});
// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4, // Відображати 4 слайди
//   spaceBetween: 30, // Відстань між слайдами
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: false,
//   },
// });
// const swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  // spaceBetween: 30,
  // freeMode: true,
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   type: "progressbar",
  // },
  // pagination: {
  //   // el: ".swiper-pagination",
  //   el: ".swiper-scrollbar",
  //   //  clickable: true,
  //   // type: "progressbar",
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  //   clickable: true,
  // },
// });

// pagination: {
//   el: ".swiper-pagination",
//   type: "progressbar",
// },
// navigation: {
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// },





//==========================================modal window================
const bodyElement = document.querySelector('body');
console.log(bodyElement)

function renderModalWindovMarkup(){
  return ` <div class="modal-window">
  <button class="modal-form-close-btn" width="40" height="40">
  <svg class="modal-form-close-icon" width="100%" height="100%">
  <use href="/symbol.882dba61.svg#icon-close-black" ></use>
  </svg>
  </button>
  <form class="consultation-form modal-form" action="submit-form" >
    <p class="form-tittle">Залишились запитання?</p>
    <p class="form-subtittle">Залишіть Ваш номер телефону
      і ми <span class="form-span"> обов'язково з Вами зв'яжемося</span></p>

    <input class="name-input" type="text" id="name" name="name" placeholder="Введіть ім'я" required>

    <input class="phone-input" type="tel" id="phone" name="phone" placeholder="Введіть номер телефону" required>

    <button class="service-btn modal-submit-btn" type="submit">Отримати консультацію</button>

    <label for="privacy-policy" class="checkbox-label">
                <input class="checkbox-input visually-hidden" type="checkbox" name="privacy-policy"
                    id="privacy-policy">
                <span class="checkbox-icon-container">
                    <svg class="checkbox-icon">
                        <use href="./img/symbol.882dba61.svg#icon-property1" width="13" height="13"></use>
                    </svg>
                </span>
             <a href="" class="privacy-policy-link link"> Натискаючи на кнопку ви погоджуєтесь з політикою конфіденційності
             </a>
            </label>
    </form>
</div>`
}

const consultationBtn = document.querySelector('.main-btn')
consultationBtn.addEventListener('click', onConsultationBtnClick)

function  onConsultationBtnClick(e) {

   bodyElement.style.overflow = 'hidden';
    //  Loading.standard('Loading...', {
    //    backgroundColor: 'rgba(0,0,0,0.8)',
    //    svgColor: 'rgb(248, 119, 25)',
    //  });
    const markup =  renderModalWindovMarkup();

    instance = basicLightbox.create(markup, {
      closable: true,
      onShow: instance => {
        instance.element().querySelector('.modal-form-close-btn')
          .addEventListener('click', () => {
            instance.close();
             bodyElement.style.overflow = 'auto';
          });
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        instance.element().querySelector('.modal-form-close-btn')
          .removeEventListener('click', () => {
             instance.close();
               bodyElement.style.overflow = 'auto';
          });
        document.removeEventListener('keydown', closeModalOnKeyPress);
         bodyElement.style.overflow = 'auto';
       
      },
      onOverlayClick: () => {
        closeModal()
      },
    });
    instance.show();

    const modalForm = instance.element().querySelector('.consultation-form');
    modalForm.addEventListener('submit', onModalSubmit);
    //  Loading.remove();
}
  


function closeModal() {
  instance.close();
   bodyElement.style.overflow = 'auto';
}
/*--------------перевірка чи натиснута клавіша Escape із закриття modal-window ------------*/
function closeModalOnKeyPress(e) {
  if (e.code !== 'Escape') return;

  instance.close();
   bodyElement.style.overflow = 'auto';
  document.removeEventListener('keydown', closeModalOnKeyPress);
}
/*--------------Рендер розмітки модального вікна після відправки даних (submit) ------------*/


function onModalSubmit(e) {
  e.preventDefault(); 
  const formEl = e.currentTarget;
  const inputValue = formEl.elements.name.value.trim();
  const inputPhone = formEl.elements.phone.value.trim();


  if (!inputValue ||  !inputValue.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/) || !inputPhone || !inputPhone.match(/^\d{10}$/)) {
    
    Notiflix.Notify.failure('Ви ввели неправильні дані. Будь ласка, спробуйте ще раз');
    return;
  } else {
  const modalWindow = instance.element().querySelector('.modal-window');

  modalWindow.innerHTML = `
    <div class="modal-submit-wrapper">
      <a href="" class="modal-logo-link">
      <img  class="modal-logo-icon" src="/logo.726d37a8.png" alt="logo-picture">
      </a>
      <button class="modal-form-close-btn" width="40" height="40">
      <svg class="modal-form-close-icon" width="100%" height="100%">
      <use href="/symbol.882dba61.svg#icon-close-black" ></use>
      </svg>
      </button>
      <p class="modal-tittle">
      <svg class="modal-social-icon" width="40" height="30">
      <use href="/symbol.882dba61.svg#icon-done" width="40" height="30"></use>
      </svg>
      Дані успішно надіслані</p>
      <p class="modal-subtittle">Ми зв'яжемося з вами найближчим часом</p>
      <div class = "modal-contact-wrapper">
      <address class="modal-address">
      <a class="contacts-address-location link" href="https://goo.gl/maps/6rrGSUPAG4NQdzpWA"
              target="_blank" rel="noopener noreferrer nofollow">
        <svg class="contacts-address-icon" width="25" height="25">
        <use href="/symbol.882dba61.svg#icon-map-pin" width="24" height="24"></use>
        </svg>
        </a>
        <p class="modal-address"> м. Чернівці, вулиця Білоусова, 25</p>
      </address>
      <p class="modal-address">
        <svg class="phone-icon" width="22" height="22">
          <use href="/symbol.882dba61.svg#icon-clock" width="21" height="21"></use>
        </svg>
        Щоденно з 8:00 до 23:00
      </p>
      </div>
      <p class="modal-social-list-paragraph">Підписуйтесь на наші соц. мережі</p>
      <ul class="modal-social-list list">
        <li class="social-item">
          <a class="social-link" href="" target="_blank" rel="noopener noreferrer nofollow">
            <svg class="modal-social-icon" width="22" height="22">
              <use href="/symbol.882dba61.svg#icon-instagram1" width="22" height="22"></use>
            </svg>
          </a>
        </li>
        <li>
          <a class="link" href="" target="_blank" rel="noopener noreferrer nofollow">
            <svg class="modal-social-icon" width="22" height="22">
              <use href="/symbol.882dba61.svg#icon-facebook1" width="22" height="22"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  `;
  modalWindow.querySelector('.modal-form-close-btn')
    .addEventListener('click', () => {
      instance.close();
    });
  document.addEventListener('keydown', closeModalOnKeyPress);
}
}


//------------ховер таблиця з з прайсом----------------
const tableData = document.querySelectorAll('.table-data');

tableData.forEach((tableEl) => {
  tableEl.addEventListener('mouseover', () => {
    const tableRow = tableEl.closest('.table-row');
    const firstTableColumn = tableRow.querySelector('.table-data:first-child');
    const columnIndex = Array.from(tableRow.children).indexOf(tableEl);
    const tableTittles = document.querySelectorAll('.table-head .table-title');

    firstTableColumn.style.color = '#F7931E';
    tableTittles[columnIndex].style.color = '#F7931E';
  });

  tableEl.addEventListener('mouseout', () => {
    const tableRow = tableEl.closest('.table-row');
    const firstTableColumn = tableRow.querySelector('.table-data:first-child');
    const tableChildren = Array.from(tableRow.querySelectorAll('.table-data'));
    
    const columnIndex = tableChildren.findIndex((element) => element === tableEl);     
    const tableTittles = document.querySelectorAll('.table-head .table-title');

    firstTableColumn.style.color = '';
    tableTittles[columnIndex].style.color = '';
  });
});
// function onMouseOver(){
//   const firstTableColumn = document.querySelectorAll('.table-data:first-child')
//   console.log(firstTableColumn)

  // firstTableColumn.forEach((tableColumn)=>{tableColumn.style.color = '#F7931E'})
  // const tableTittle = document.querySelectorAll('.table-title');

  // tableTittle.forEach((tittle)=>{tittle.style.color = '#F7931E'})

//   firstTableColumn.forEach((tableColumn)=>{tableColumn.style.color = ''})
// }
// const tableTittle = document.querySelectorAll('.table-title');
// tableTittle.forEach((tittle)=>{tittle.addEventListener('mouseover', onMouseOver)})