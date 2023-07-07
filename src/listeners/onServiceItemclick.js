const serviceItems = document.querySelectorAll('.service-item');

for (const item of serviceItems) {
  item.addEventListener('click', onServiceItemClick);
}

 export function onServiceItemClick(event) {
    const currentService = event.target.closest('.service-item');
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.classList.remove('current-service');
    });
    currentService.classList.add('current-service');
  }
