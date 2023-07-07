import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';


 export const firstGallarySwiper = new Swiper(".gallary-swiper", {
    slidesPerView: 3,
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
  
    freeMode: true,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    
    loop: true,
     
  });
  
 export const secondGallarySwiper = new Swiper(".gallary-admin-swiper", {
    slidesPerView: 4,
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
  
    freeMode: true,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    loop: true,
  });
  
export const trainersSwiper = new Swiper(".trainers-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
   
    navigation: {
      prevEl: ".trainer-slide-btn-prev",
      nextEl: ".trainer-slide-btn-next",
    },
  
    freeMode: true,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    
    loop: true,
     
  });