import { renderModalWindowMarkup } from "../markups/renderModalWindowMarkup";
import { closeModalOnKeyPress, closeModal } from "./onCloseModal";
 import { onModalSubmit } from '../index';


const consultationBtn = document.querySelector('.main-btn')
const bodyElement = document.body;
consultationBtn.addEventListener('click', onConsultationMainBtnClick)
let instance; 


export function  onConsultationMainBtnClick(e) {

    bodyElement.style.overflow = 'hidden';
     //  Loading.standard('Loading...', {
     //    backgroundColor: 'rgba(0,0,0,0.8)',
     //    svgColor: 'rgb(248, 119, 25)',
     //  });
     const markup =  renderModalWindowMarkup();
 
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

//  export function closeModalOnKeyPress(e) {
//   if (e.code !== 'Escape') return;
//   const bodyElement = document.body;
//   instance.close();
//    bodyElement.style.overflow = 'auto';
//   document.removeEventListener('keydown', closeModalOnKeyPress);
// }

// export function closeModal() {
//   const bodyElement = document.body;
//   instance.close();
//    bodyElement.style.overflow = 'auto';
// }