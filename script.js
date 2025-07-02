import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// 初始化 smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

window.onload = function () {
  // 打字機效果
  new Typed("#BigTitleLooping", {
    strings: ["FRC8569", "中和高中FRC"],
    typeSpeed: 85,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
  });

  // Swiper輪播（目前頁面沒啟用，預留）
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};
