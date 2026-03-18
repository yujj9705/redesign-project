// 배경 슬라이드
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 오른쪽 이미지 슬라이드
const heroRightSwiper = new Swiper(".hero-right-swiper", {
  loop: true,
  effect: "fade",
  allowTouchMove: false, // 오른쪽 이미지는 드래그 금지
});

// 두 Swiper 동기화
heroSwiper.controller.control = heroRightSwiper;
heroRightSwiper.controller.control = heroSwiper;
