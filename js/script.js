var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024:{
          slidesPerView: 4,
          spaceBetween: 50,
        }
      },
    });