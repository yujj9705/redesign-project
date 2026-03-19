const leftSwiper = new Swiper(".hero-swiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  allowTouchMove: false, // 왼쪽은 터치 막기 (배경용)
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const rightSwiper = new Swiper(".hero-swiper-right", {
  loop: true,
  speed: 1000,
});

leftSwiper.controller.control = rightSwiper;
rightSwiper.controller.control = leftSwiper;

// 언어변경
const langBox = document.querySelector(".language");
const langBtn = document.querySelector(".lang-btn");
const langItems = document.querySelectorAll(".lang-dropdown li");
const currentLang = document.querySelector(".current-lang");

// 버튼 클릭 → 드롭다운 열기/닫기
langBtn.addEventListener("click", () => {
  langBox.classList.toggle("active");
});

// 언어 선택
langItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selected = item.dataset.lang;
    currentLang.textContent = selected;
    langBox.classList.remove("active");
  });
});

// 바깥 클릭하면 닫기
document.addEventListener("click", (e) => {
  if (!langBox.contains(e.target)) {
    langBox.classList.remove("active");
  }
});
