import {closeModalOnKeyPress} from '../listeners/onCloseModal'
import { instance } from "../listeners/onConsultationMainBtnClick";
// import { closeModal } from '../listeners/onCloseModal';
// import * as basicLightbox from 'basiclightbox'
export function renderSuccesModalContent() {
   
    document.querySelector('.modal-window').innerHTML = `
   <div class="modal-submit-wrapper">
   <a href="" class="modal-logo-link">
   <img  class="modal-logo-icon" src="./img/logo.png" alt="logo-picture">
   </a>
   <button class="modal-form-close-btn" width="40" height="40">
   <svg class="modal-form-close-icon" width="100%" height="100%">
   <use href="./img/symbol.svg#icon-close-black" ></use>
   </svg>
   </button>
   <p class="modal-tittle">
   <svg class="modal-social-icon" width="40" height="30">
   <use href="./img/symbol.svg#icon-done" width="40" height="30"></use>
   </svg>
   Дані успішно надіслані</p>
   <p class="modal-subtittle">Ми зв'яжемося з вами найближчим часом</p>
   <div class = "modal-contact-wrapper">
   <address class="modal-address">
   <a class="contacts-address-location link" href="https://goo.gl/maps/6rrGSUPAG4NQdzpWA"
           target="_blank" rel="noopener noreferrer nofollow">
     <svg class="contacts-address-icon" width="25" height="25">
     <use href="./img/symbol.svg#icon-map-pin" width="24" height="24"></use>
     </svg>
     </a>
     <p class="modal-address"> м. Чернівці, вулиця Білоусова, 25</p>
   </address>
   <p class="modal-address">
     <svg class="phone-icon" width="22" height="22">
       <use href="./img/symbol.svg#icon-clock" width="21" height="21"></use>
     </svg>
     Щоденно з 8:00 до 23:00
   </p>
   </div>
   <p class="modal-social-list-paragraph">Підписуйтесь на наші соц. мережі</p>
   <ul class="modal-social-list list">
     <li class="social-item">
       <a class="social-link" href="" target="_blank" rel="noopener noreferrer nofollow">
         <svg class="modal-social-icon" width="22" height="22">
           <use href="./img/symbol.svg#icon-instagram1" width="22" height="22"></use>
         </svg>
       </a>
     </li>
     <li>
       <a class="link" href="" target="_blank" rel="noopener noreferrer nofollow">
         <svg class="modal-social-icon" width="22" height="22">
           <use href="./img/symbol.svg#icon-facebook1" width="22" height="22"></use>
         </svg>
       </a>
     </li>
   </ul>
 </div>
   `;
   
   document.querySelector('.modal-window').querySelector('.modal-form-close-btn')
   .addEventListener('click', () => {
     instance.close();
   });

 document.addEventListener('keydown', closeModalOnKeyPress);
}