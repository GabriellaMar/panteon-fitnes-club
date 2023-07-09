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
       breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 3,
        },
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
       breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 4,
        },
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
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 3,
      },
    },
  
    freeMode: true,
      speed: 1500,
  
      autoplay: {
        delay: 2000,
      },
    
    loop: true,
     
  });