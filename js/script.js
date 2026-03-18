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

// 언어 변경
const langBtn = document.getElementById("langBtn");
const langText = document.getElementById("langText");
const langMenu = document.querySelector(".lang-menu");

// 버튼 클릭 → 메뉴 토글
langBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "block" ? "none" : "block";
});

// 옵션 클릭 → 텍스트 변경 & 메뉴 닫기
langMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    langText.textContent = item.dataset.lang;
    langMenu.style.display = "none";
  });
});

// 바깥 클릭 시 메뉴 닫기
document.addEventListener("click", (e) => {
  if (!document.querySelector(".language").contains(e.target)) {
    langMenu.style.display = "none";
  }
});
