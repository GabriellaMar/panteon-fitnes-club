let instance;
export function closeModalOnKeyPress(e) {
    if (e.code !== 'Escape') return;
    const bodyElement = document.body;
    instance.close();
     bodyElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closeModalOnKeyPress);
  }

  export function closeModal() {
    const bodyElement = document.body;
    instance.close();
     bodyElement.style.overflow = 'auto';
  }