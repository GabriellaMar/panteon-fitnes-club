import * as basicLightbox from 'basiclightbox'
import {renderSuccesModalWindow} from '../markups/renderModalSuccesMarkup'
import { closeModalOnKeyPress, closeModal } from "./onCloseModal";
// import { onModalSubmit } from "./onModalSubmit";
let instance;
 
export function onConsultationButtonClick(e) {
    e.preventDefault();
  
    const formEl = e.target;
    const inputValue = formEl.elements.name.value.trim();
    const inputPhone = formEl.elements.phone.value.trim();
  
    if (!inputValue || !inputValue.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/) || !inputPhone || !inputPhone.match(/^\d{10}$/)) {
      Notiflix.Notify.failure('Ви ввели неправильні дані. Будь ласка, спробуйте ще раз');
      return;
    }
  
    e.target.reset();
  
    const markup = renderSuccesModalWindow();
  
    instance = basicLightbox.create(markup, {
      closable: true,
      onShow: instance => {
        instance.element().querySelector('.modal-form-close-btn').addEventListener('click', () => {
          instance.close();
        });
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        instance.element().querySelector('.modal-form-close-btn').removeEventListener('click', () => {
          instance.close();
        });
        document.removeEventListener('keydown', closeModalOnKeyPress);
      },
      onOverlayClick: () => {
        closeModal();
      },
    });
  
    instance.show();
  }
  
  const formEl = document.querySelector('.consultation-form');
  formEl.addEventListener('submit', onConsultationButtonClick);