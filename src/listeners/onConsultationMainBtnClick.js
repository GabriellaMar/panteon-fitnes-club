// import { renderModalWindowMarkup } from "../markups/renderModalWindowMarkup";
// import { closeModalOnKeyPress, closeModal } from "./onCloseModal";
//  import { onModalSubmit } from '../index';
import { renderModalWindowMarkup } from "../markups/renderModalWindowMarkup";
import { closeModalOnKeyPress } from "./onCloseModal";
import { closeModal } from "./onCloseModal";
import { onModalSubmit } from "./onModalSubmit";
import * as basicLightbox from 'basiclightbox'


 const consultationBtn = document.querySelector('.main-btn')
 const bodyElement = document.body;
 consultationBtn.addEventListener('click', onConsultationMainBtnClick)
 export let instance; 


 function  onConsultationMainBtnClick(e) {
  
    const bodyElement = document.body;
     bodyElement.style.overflow = 'hidden';
 //     //  Loading.standard('Loading...', {
 //     //    backgroundColor: 'rgba(0,0,0,0.8)',
 //     //    svgColor: 'rgb(248, 119, 25)',
 //     //  });
 
      const markup = renderModalWindowMarkup();
 
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
 
     const modalForm = instance.element().querySelector('.modal-form');
      modalForm.addEventListener('submit', onModalSubmit);
 //     //  Loading.remove();
  }
 

