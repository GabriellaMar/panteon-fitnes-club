export function renderSuccesModalWindow() {
  const iconUrl = '/symbol.882dba61.svg#icon-close-black';
  const logoUrl = '/logo.726d37a8.png'
  const iconDone = '/symbol.882dba61.svg#icon-done'
  const iconMapUrl = '/symbol.882dba61.svg#icon-map-pin'
  const iconClockUrl = '/symbol.882dba61.svg#icon-clock'
    return `
    <div class="modal-window">
    <div class="modal-submit-wrapper">
    <a href="" class="modal-logo-link">
    <img  class="modal-logo-icon" src="${logoUrl}" alt="logo-picture">
    </a>
    <button class="modal-form-close-btn" width="40" height="40">
    <svg class="modal-form-close-icon">
    <use href='${iconUrl}' ></use>
    </svg>
    </button>
    <p class="modal-tittle">
    <svg class="modal-social-icon" width="30" height="2">
    <use href="${iconDone}" width="30" height="20"></use>
    </svg>
    Дані успішно надіслані</p>
    <p class="modal-subtittle">Ми зв'яжемося з вами найближчим часом</p>
    <div class = "modal-contact-wrapper">
    <address class="modal-address">
    <a class="contacts-address-location link" href="https://goo.gl/maps/6rrGSUPAG4NQdzpWA"
            target="_blank" rel="noopener noreferrer nofollow">
      <svg class="contacts-address-icon" width="25" height="25">
      <use href="${iconMapUrl}" width="24" height="24"></use>
      </svg>
      </a>
      <p class="modal-address"> м. Чернівці, вулиця Білоусова, 25</p>
    </address>
    <p class="modal-address">
      <svg class="phone-icon" width="22" height="22">
        <use href="${iconClockUrl}" width="21" height="21"></use>
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
   </div>
   </div>
    `;
   }
