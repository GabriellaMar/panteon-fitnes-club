import './css/styles.css';
// import { register } from 'swiper/element/bundle';

// register();

// const currentService = document.querySelectorAll('.service-item');

const serviceItems = document.querySelectorAll('.service-item');

for (const item of serviceItems) {
  item.addEventListener('click', onServiceItemClick);
}

function onServiceItemClick(event) {
    const currentService = event.target.closest('.service-item');
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.classList.remove('current-service');
    });
    currentService.classList.add('current-service');
  }



  const allTableData = document.querySelectorAll('.table-data td');
  const allTableHead = document.querySelectorAll('.table-head th');
  
  allTableData.forEach(td => {
    td.addEventListener('mouseover', function() {
      const dataRowIndex = td.parentNode.rowIndex - 1;
      allTableData.forEach(td => td.classList.remove('active'));
      allTableHead.forEach(th => th.classList.remove('active'));
      const header = document.querySelector(`.table-head tr th:nth-child(${dataRowIndex + 2})`);
      header.classList.add('active');
      td.classList.add('active');
    });
  });
