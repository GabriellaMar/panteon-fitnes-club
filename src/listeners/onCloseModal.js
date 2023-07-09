import { instance } from "./onConsultationMainBtnClick";
export function closeModalOnKeyPress(e) {
    if (e.code !== 'Escape') return;
    const bodyElement = document.body;
    instance.close();
     bodyElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closeModalOnKeyPress);
  }

  export function closeModal( instance) {
    const bodyElement = document.body;
    instance.close();
     bodyElement.style.overflow = 'auto';
  }