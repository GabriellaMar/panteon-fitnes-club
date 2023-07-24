export function renderModalWindowMarkup(){
  const iconUrl = '/symbol.svg#icon-close-black';

    return ` <div class="modal-window">
    <button class="modal-form-close-btn" width="40" height="40">
    <svg class="modal-form-close-icon" width="100%" height="100%">
    <use href="${iconUrl}" ></use>
    </svg>
    </button>
    <form class="consultation-form modal-form" action="submit-form" >
      <p class="form-tittle">Залишились запитання?</p>
      <p class="form-subtittle">Залишіть Ваш номер телефону
        і ми <span class="form-span"> обов'язково з Вами зв'яжемося</span></p>
  
      <input class="name-input" type="text" id="name" name="name" placeholder="Введіть ім'я" required>
  
      <input class="phone-input" type="tel" id="phone" name="phone" placeholder="Введіть номер телефону" required>
  
      <button class="service-btn modal-submit-btn" type="submit">Отримати консультацію</button>
  
               <a href="" class="privacy-policy-link link"> Натискаючи на кнопку ви погоджуєтесь з політикою конфіденційності
               </a>
      </form>
  </div>`
  }
  

   