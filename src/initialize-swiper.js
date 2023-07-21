import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';


 export const firstGallarySwiper = new Swiper(".gallary-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
    navigation: {
      prevEl: ".gallary-slide-btn-prev",
      nextEl: ".gallary-slide-btn-next",
    },
    scrollbar: {
      el: ".gallary-slide-scrollbar",
      clickable: true,
      draggable: true,
       },
       breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      },
  
      freeMode: false,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    
    loop: true,
     
  });
  
 export const secondGallarySwiper = new Swiper(".gallary-admin-swiper", {
     slidesPerView: 4,
     spaceBetween: 30,
     loopAdditionalSlides: 3, // Додаткова кількість слайдів для циклічного прокручування
     loopedSlides: 3, // Кількість слайдів, які будуть дублюватись для циклічного прокручування
     loopFillGroupWithBlank: true, // Заповнює останню групу з іншими слайдами для циклічного прокручування
    direction: 'horizontal',
    navigation: {
      prevEl: ".gallary-admin-btn-prev",
      nextEl: ".gallary-admin-btn-next",
    },
    scrollbar: {
      el: ".gallary-admin-scrollbar",
      clickable: true,
      draggable: true,
       },
       breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
        },
      },
  
      freeMode: false,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
     loop: true,
  });
  
export const trainersSwiper = new Swiper(".trainers-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,

    // loopAdditionalSlides: 3, // Додаткова кількість слайдів для циклічного прокручування
    // loopedSlides: 3, // Кількість слайдів, які будуть дублюватись для циклічного прокручування
    // loopFillGroupWithBlank: true,
   
    navigation: {
      prevEl: ".trainer-slide-btn-prev",
      nextEl: ".trainer-slide-btn-next",
    },
    scrollbar: {
      el: ".trainer-slide-scrollbar",
      clickable: true,
      draggable: true,
       },
       
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  
    freeMode: false,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    
    loop: true,
     
  });