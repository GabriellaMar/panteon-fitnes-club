import { renderSuccesModalContent } from '../markups/modalWindowContent';
import { closeModalOnKeyPress } from '../listeners/onCloseModal';

export function onModalSubmit(e) {
  e.preventDefault();
  const formEl = e.currentTarget;
  const inputValue = formEl.elements.name.value.trim();
  const inputPhone = formEl.elements.phone.value.trim();

  if (!inputValue || !inputValue.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/) || !inputPhone || !inputPhone.match(/^\d{10}$/)) {
    Notiflix.Notify.failure('Ви ввели неправильні дані. Будь ласка, спробуйте ще раз');
    return;
  }

  renderSuccesModalContent();

    modalWindow.querySelector('.modal-form-close-btn')
      .addEventListener('click', () => {
        instance.close();
      });
    document.addEventListener('keydown', closeModalOnKeyPress);
  }
  