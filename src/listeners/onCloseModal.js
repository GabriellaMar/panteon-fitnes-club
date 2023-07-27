import { instance } from "./onConsultationMainBtnClick";


export function closeModalOnKeyPress(e) {
  if (e.code !== 'Escape') return;
  const bodyElement = document.body;
  closeModal();
  bodyElement.style.overflow = 'auto';
  document.removeEventListener('keydown', closeModalOnKeyPress);
}


  export function closeModal() {
    const mainModal = document.querySelector('.main-modal-backdrop');
    const closeBtn = document.querySelector('.modal-form-close-btn');
    mainModal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
    closeBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModalOnKeyPress);
  }

 export function closeModalOnBackdropClick(e) {
  const mainModal = document.querySelector('.main-modal-backdrop')
    if (e.target === mainModal) {
      closeModal();
    }
  }