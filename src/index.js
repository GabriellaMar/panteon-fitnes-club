import './css/styles.css';
import Notiflix from 'notiflix';
// import Swiper from 'swiper/swiper-bundle';
// import 'swiper/swiper-bundle.css';
import { firstGallarySwiper, secondGallarySwiper, trainersSwiper } from './initialize-swiper';
import { renderModalWindovMarkup  } from './markups/rendermodalwindowMarkup';
import { renderSuccesModalContent } from './markups/modalWindowContent';
import { renderSuccesModalWindow } from './markups/renderModalSuccesMarkup';
import { onConsultationMainBtnClick } from './listeners/onConsultationMainBtnClick';
import { onConsultationButtonClick } from './listeners/onConsultationButtonClick';
import { onModalSubmit } from './listeners/onModalSubmit';
import { closeModalOnKeyPress, closeModal } from './listeners/onCloseModal';
import { onServiceItemClick } from './listeners/onServiceItemclick';


import * as basicLightbox from 'basiclightbox'

// const currentService = document.querySelectorAll('.service-item');

// const serviceItems = document.querySelectorAll('.service-item');

// for (const item of serviceItems) {
//   item.addEventListener('click', onServiceItemClick);
// }

// function onServiceItemClick(event) {
//     const currentService = event.target.closest('.service-item');
//     const serviceItems = document.querySelectorAll('.service-item');
//     serviceItems.forEach(item => {
//       item.classList.remove('current-service');
//     });
//     currentService.classList.add('current-service');
//   }

//========================================

//========================================

// const firstGallarySwiper = new Swiper(".gallary-swiper", {
//   slidesPerView: 3,
//   direction: 'horizontal',
//   navigation: {
//     prevEl: ".gallary-slide-btn-prev",
//     nextEl: ".gallary-slide-btn-next",
//   },
//   scrollbar: {
//     el: ".gallary-slide-scrollbar",
//     clickable: true,
//     draggable: true,
//      },

//   freeMode: true,
//     speed: 1500,

//     autoplay: {
//       delay: 2000,
//     },
  
//   loop: true,
   
// });

// const secondGallarySwiper = new Swiper(".gallary-admin-swiper", {
//   slidesPerView: 4,
//   direction: 'horizontal',
//   navigation: {
//     prevEl: ".gallary-admin-btn-prev",
//     nextEl: ".gallary-admin-btn-next",
//   },
//   scrollbar: {
//     el: ".gallary-admin-scrollbar",
//     clickable: true,
//     draggable: true,
//      },

//   freeMode: true,
//     speed: 1500,

//     autoplay: {
//       delay: 2000,
//     },
//   loop: true,
// });

// const trainersSwiper = new Swiper(".trainers-swiper", {
//   slidesPerView: 3,
//   spaceBetween: 20,
 
//   navigation: {
//     prevEl: ".trainer-slide-btn-prev",
//     nextEl: ".trainer-slide-btn-next",
//   },

//   freeMode: true,
//     speed: 1500,

//     autoplay: {
//       delay: 2000,
//     },
  
//   loop: true,
   
// });



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

//==========================================modal window SUBMIT for main-btn================

 const consultationBtn = document.querySelector('.main-btn')

 const bodyElement = document.body;
 consultationBtn.addEventListener('click', onConsultationMainBtnClick)
 let instance;
 function  onConsultationMainBtnClick(e) {
  // const bodyElement = document.body;
    bodyElement.style.overflow = 'hidden';
//     //  Loading.standard('Loading...', {
//     //    backgroundColor: 'rgba(0,0,0,0.8)',
//     //    svgColor: 'rgb(248, 119, 25)',
//     //  });
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
//     //  Loading.remove();
 }

 /*-------Відправка даних (submit) , та відкриття модального вікна про успішність відправки даних----*/
 function onModalSubmit(e) {
   e.preventDefault(); 
   const formEl = e.currentTarget;
   const inputValue = formEl.elements.name.value.trim();
   const inputPhone = formEl.elements.phone.value.trim();


   if (!inputValue ||  !inputValue.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/) || !inputPhone || !inputPhone.match(/^\d{10}$/)) {
    
    Notiflix.Notify.failure('Ви ввели неправильні дані. Будь ласка, спробуйте ще раз');     return;
   } 
   renderSuccesModalContent()
 
   modalWindow.querySelector('.modal-form-close-btn')
     .addEventListener('click', () => {
       instance.close();
    });
   document.addEventListener('keydown', closeModalOnKeyPress);
 }

// function renderModalWindovMarkup(){
//   return ` <div class="modal-window">
//   <button class="modal-form-close-btn" width="40" height="40">
//   <svg class="modal-form-close-icon" width="100%" height="100%">
//   <use href="/symbol.882dba61.svg#icon-close-black" ></use>
//   </svg>
//   </button>
//   <form class="consultation-form modal-form" action="submit-form" >
//     <p class="form-tittle">Залишились запитання?</p>
//     <p class="form-subtittle">Залишіть Ваш номер телефону
//       і ми <span class="form-span"> обов'язково з Вами зв'яжемося</span></p>

//     <input class="name-input" type="text" id="name" name="name" placeholder="Введіть ім'я" required>

//     <input class="phone-input" type="tel" id="phone" name="phone" placeholder="Введіть номер телефону" required>

//     <button class="service-btn modal-submit-btn" type="submit">Отримати консультацію</button>

//              <a href="" class="privacy-policy-link link"> Натискаючи на кнопку ви погоджуєтесь з політикою конфіденційності
//              </a>
//     </form>
// </div>`
// }



 
  
//  function closeModal() {
//    instance.close();
//     bodyElement.style.overflow = 'auto';
//  }
/*--------------перевірка чи натиснута клавіша Escape із закриття modal-window ------------*/
//  function closeModalOnKeyPress(e) {
//    if (e.code !== 'Escape') return;

//    instance.close();
//     bodyElement.style.overflow = 'auto';
//    document.removeEventListener('keydown', closeModalOnKeyPress);
//  }
/*--------------Рендер розмітки модального вікна після відправки даних (submit) ------------*/

// function renderSuccesModalContent() {
//    const modalWindow = instance.element().querySelector('.modal-window');
//   modalWindow.innerHTML = `
//   <div class="modal-submit-wrapper">
//   <a href="" class="modal-logo-link">
//   <img  class="modal-logo-icon" src="/logo.726d37a8.png" alt="logo-picture">
//   </a>
//   <button class="modal-form-close-btn" width="40" height="40">
//   <svg class="modal-form-close-icon" width="100%" height="100%">
//   <use href="/symbol.882dba61.svg#icon-close-black" ></use>
//   </svg>
//   </button>
//   <p class="modal-tittle">
//   <svg class="modal-social-icon" width="40" height="30">
//   <use href="/symbol.882dba61.svg#icon-done" width="40" height="30"></use>
//   </svg>
//   Дані успішно надіслані</p>
//   <p class="modal-subtittle">Ми зв'яжемося з вами найближчим часом</p>
//   <div class = "modal-contact-wrapper">
//   <address class="modal-address">
//   <a class="contacts-address-location link" href="https://goo.gl/maps/6rrGSUPAG4NQdzpWA"
//           target="_blank" rel="noopener noreferrer nofollow">
//     <svg class="contacts-address-icon" width="25" height="25">
//     <use href="/symbol.882dba61.svg#icon-map-pin" width="24" height="24"></use>
//     </svg>
//     </a>
//     <p class="modal-address"> м. Чернівці, вулиця Білоусова, 25</p>
//   </address>
//   <p class="modal-address">
//     <svg class="phone-icon" width="22" height="22">
//       <use href="/symbol.882dba61.svg#icon-clock" width="21" height="21"></use>
//     </svg>
//     Щоденно з 8:00 до 23:00
//   </p>
//   </div>
//   <p class="modal-social-list-paragraph">Підписуйтесь на наші соц. мережі</p>
//   <ul class="modal-social-list list">
//     <li class="social-item">
//       <a class="social-link" href="" target="_blank" rel="noopener noreferrer nofollow">
//         <svg class="modal-social-icon" width="22" height="22">
//           <use href="/symbol.882dba61.svg#icon-instagram1" width="22" height="22"></use>
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a class="link" href="" target="_blank" rel="noopener noreferrer nofollow">
//         <svg class="modal-social-icon" width="22" height="22">
//           <use href="/symbol.882dba61.svg#icon-facebook1" width="22" height="22"></use>
//         </svg>
//       </a>
//     </li>
//   </ul>
// </div>
//   `;

//   modalWindow.querySelector('.modal-form-close-btn')
//     .addEventListener('click', () => {
//       instance.close();
//     });

//   document.addEventListener('keydown', closeModalOnKeyPress);
// }








/*--------------Модальне  вікно при успішній відправці даних з форми в секції Соnsultation ------------*/


// function renderSuccesModalWindow() {
//  return `
//  <div class="modal-window">
//  <div class="modal-submit-wrapper">
//  <a href="" class="modal-logo-link">
//  <img  class="modal-logo-icon" src="/logo.726d37a8.png" alt="logo-picture">
//  </a>
//  <button class="modal-form-close-btn" width="40" height="40">
//  <svg class="modal-form-close-icon" width="100%" height="100%">
//  <use href="/symbol.882dba61.svg#icon-close-black" ></use>
//  </svg>
//  </button>
//  <p class="modal-tittle">
//  <svg class="modal-social-icon" width="40" height="30">
//  <use href="/symbol.882dba61.svg#icon-done" width="40" height="30"></use>
//  </svg>
//  Дані успішно надіслані</p>
//  <p class="modal-subtittle">Ми зв'яжемося з вами найближчим часом</p>
//  <div class = "modal-contact-wrapper">
//  <address class="modal-address">
//  <a class="contacts-address-location link" href="https://goo.gl/maps/6rrGSUPAG4NQdzpWA"
//          target="_blank" rel="noopener noreferrer nofollow">
//    <svg class="contacts-address-icon" width="25" height="25">
//    <use href="/symbol.882dba61.svg#icon-map-pin" width="24" height="24"></use>
//    </svg>
//    </a>
//    <p class="modal-address"> м. Чернівці, вулиця Білоусова, 25</p>
//  </address>
//  <p class="modal-address">
//    <svg class="phone-icon" width="22" height="22">
//      <use href="/symbol.882dba61.svg#icon-clock" width="21" height="21"></use>
//    </svg>
//    Щоденно з 8:00 до 23:00
//  </p>
//  </div>
//  <p class="modal-social-list-paragraph">Підписуйтесь на наші соц. мережі</p>
//  <ul class="modal-social-list list">
//    <li class="social-item">
//      <a class="social-link" href="" target="_blank" rel="noopener noreferrer nofollow">
//        <svg class="modal-social-icon" width="22" height="22">
//          <use href="/symbol.882dba61.svg#icon-instagram1" width="22" height="22"></use>
//        </svg>
//      </a>
//    </li>
//    <li>
//      <a class="link" href="" target="_blank" rel="noopener noreferrer nofollow">
//        <svg class="modal-social-icon" width="22" height="22">
//          <use href="/symbol.882dba61.svg#icon-facebook1" width="22" height="22"></use>
//        </svg>
//      </a>
//    </li>
//  </ul>
// </div>
// </div>
// </div>
//  `;
// }


  



//  function onConsultationButtonClick(e) {
//    e.preventDefault();

//    const formEl = e.target;
//    const inputValue = formEl.elements.name.value.trim();
//    const inputPhone = formEl.elements.phone.value.trim();

//    if (!inputValue || !inputValue.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/) || !inputPhone || !inputPhone.match(/^\d{10}$/)) {
//      Notiflix.Notify.failure('Ви ввели неправильні дані. Будь ласка, спробуйте ще раз');
//      return;
//    }

//    e.target.reset();

//    const markup = renderSuccesModalWindow();

//    instance = basicLightbox.create(markup, {
//      closable: true,
//      onShow: instance => {
//        instance.element().querySelector('.modal-form-close-btn').addEventListener('click', () => {
//          instance.close();
//       });
//        document.addEventListener('keydown', closeModalOnKeyPress);
//      },
//     onClose: instance => {
//        instance.element().querySelector('.modal-form-close-btn').removeEventListener('click', () => {
//          instance.close();
//        });
//        document.removeEventListener('keydown', closeModalOnKeyPress);
//      },
//      onOverlayClick: () => {
//        closeModal();
//      },
//    });

//    instance.show();
//  }

//  const formEl = document.querySelector('.consultation-form');
//  formEl.addEventListener('submit', onConsultationButtonClick);



//--------Scroll to consultation-form from servise-section-btn-------------
const scrollBtn = document.querySelector('.service-btn-scroll');
const consultationSection = document.getElementById('consultation');
scrollBtn.addEventListener('click', (event) => {

  event.preventDefault();
  
  consultationSection.scrollIntoView({
    behavior: 'smooth' 
  });
});

//--------Scroll to consultation-form from subscription-section-btn-------------
const subscriptionScrollBtnItems = document.querySelectorAll('.subscription-btn-scroll')
 for (const item of subscriptionScrollBtnItems) {
     item.addEventListener('click', (event) => {

      event.preventDefault();
      
      consultationSection.scrollIntoView({
        behavior: 'smooth' 
      });
    });
  }

    //--------Scroll to addres-section from header-------------
    const scrollHeaderGallaryItem = document.querySelector('.nav-link.gallary-scroll');
const gallarySection = document.getElementById('gallary');
scrollHeaderGallaryItem.addEventListener('click', (event) => {
  event.preventDefault();
  gallarySection.scrollIntoView({
    behavior: 'smooth' 
  });
});
//--------Scroll to trainers-section from header-------------
const scrollHeaderTrainerItem = document.querySelector('.nav-link.trainers-scroll')
const trainersSection = document.getElementById('trainers');
scrollHeaderTrainerItem.addEventListener('click', (event) => {
  event.preventDefault();
  trainersSection.scrollIntoView({
    behavior: 'smooth' 
  });
});
//--------Scroll to address-section from header-------------
const scrollHeaderContactsItem = document.querySelector('.nav-link.contacts-scroll')
const addressSection = document.getElementById('contacts');
scrollHeaderContactsItem.addEventListener('click', (event) => {
  event.preventDefault();
  addressSection.scrollIntoView({
    behavior: 'smooth' 
  });
});
//--------Scroll to subscription-section from header-------------
const scrollHeaderSubscriptionItem = document.querySelector('.nav-link.subscription-scroll')
const subscriptionSection = document.getElementById('subscription');
scrollHeaderSubscriptionItem.addEventListener('click', (event) => {
  event.preventDefault();
  subscriptionSection.scrollIntoView({
    behavior: 'smooth' 
  });
});