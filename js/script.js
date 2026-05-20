/* ────────────────────────────────────────
   Hero Swiper
──────────────────────────────────────── */
const leftSwiper = new Swiper(".hero-swiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  allowTouchMove: false,
  autoplay: { delay: 3000, disableOnInteraction: false },
});
const rightSwiper = new Swiper(".hero-swiper-right", {
  loop: true,
  speed: 1000,
});
leftSwiper.controller.control = rightSwiper;
rightSwiper.controller.control = leftSwiper;

/* ────────────────────────────────────────
   언어 드롭다운
──────────────────────────────────────── */
const langBox = document.querySelector(".language");
const langBtn = document.querySelector(".lang-btn");
const langItems = document.querySelectorAll(".lang-dropdown li");
const currentLang = document.querySelector(".basic-lang");

langBtn.addEventListener("click", () => langBox.classList.toggle("active"));
langItems.forEach((item) => {
  item.addEventListener("click", () => {
    currentLang.textContent = item.dataset.lang;
    langBox.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!langBox.contains(e.target)) langBox.classList.remove("active");
});

/* ────────────────────────────────────────
   자격증 탭 전환
──────────────────────────────────────── */
const certTabs = document.querySelectorAll(".cert-tab");
const certPanels = document.querySelectorAll(".cert-panel");

certTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    certTabs.forEach((t) => t.classList.remove("active"));
    certPanels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelector(`.cert-panel[data-panel="${tab.dataset.tab}"]`)
      .classList.add("active");
  });
});

/* ────────────────────────────────────────
   강의 미리보기
──────────────────────────────────────── */
const courseData = [
  {
    title: "레진 공예 중급 :",
    sub: '예쁘고 영롱한 "벨루가 무드등" 만들기',
    price: "75,000원",
    desc: "레진공예 기초 과정을 이수하신 분들을 위한 중급 과정으로, 이번 강의에서는 벨루가 무드등 작품 1종을 완성합니다.",
    checks: [
      "색감 배합",
      "투명도 조절",
      "몰드 응용 기법",
      "빛을 고려한 레진 표현",
    ],
    descLong:
      "중급자에게 꼭 필요한 표현 기술을 집중적으로 다룹니다. 벨루가 특유의 부드러운 실루엣과 은은하게 퍼지는 무드등 조명을 통해, 레진의 깊이감과 분위기 연출 방법을 배울 수 있습니다.",
    img: "./assets/images/cp-1-de.jpg",
    thumbs: ["./assets/images/cp-1-1.jpg", "./assets/images/cp-1-2.jpg"],
  },
  {
    title: "매듭공예 중급 :",
    sub: "나만의 매듭가방 완성하기",
    price: "65,000원",
    desc: "집에서도 차근차근 완성하는 나만의 매듭가방. 매듭공예 중급반 온라인 강의입니다.",
    checks: [
      "기본 매듭 복습",
      "가방 패턴 이해",
      "마감 처리 기법",
      "디자인 응용",
    ],
    descLong:
      "매듭의 기본기를 다지고 실용적인 가방 제작까지 이어지는 중급 과정입니다.",
    img: "./assets/images/cp-2.jpg",
    thumbs: ["./assets/images/cp-2.jpg", "./assets/images/cp-2.jpg"],
  },
  {
    title: "가죽공예 기초 :",
    sub: "탄탄한 기초로 시작하는 가죽공예",
    price: "55,000원",
    desc: "기본이 탄탄해야 작품이 달라집니다. 가죽공예의 핵심 기초를 배우는 시간.",
    checks: [
      "가죽 종류 이해",
      "재단 및 바느질",
      "엣지 마감 처리",
      "기초 소품 제작",
    ],
    descLong:
      "가죽의 특성과 기본 도구 사용법부터 시작해 소품 하나를 완성하기까지 전 과정을 배웁니다.",
    img: "./assets/images/cp-3.jpg",
    thumbs: ["./assets/images/cp-3.jpg", "./assets/images/cp-3.jpg"],
  },
  {
    title: "천연비누 만들기 :",
    sub: "자연 그대로의 천연비누 제작",
    price: "45,000원",
    desc: "불필요한 성분은 빼고, 자연은 그대로. 믿고 쓰는 천연비누를 직접 만들어보세요.",
    checks: ["원료 성분 이해", "CP 비누 제작", "향 및 색 첨가", "숙성 및 포장"],
    descLong:
      "피부에 자극 없는 천연 원료만을 사용해 나만의 비누를 만드는 과정입니다.",
    img: "./assets/images/cp-4.jpg",
    thumbs: ["./assets/images/cp-4.jpg", "./assets/images/cp-4.jpg"],
  },
];

const previewItems = document.querySelectorAll(".preview-course-item");
const previewMainImg = document.getElementById("previewMainImg");
const previewCourseTitle = document.getElementById("previewCourseTitle");
const previewCourseSub = document.getElementById("previewCourseSub");
const previewCourseDesc = document.getElementById("previewCourseDesc");
const previewChecklist = document.getElementById("previewChecklist");
const previewThumbs = document.querySelectorAll(".preview-thumb");

let currentPreviewIndex = 0;

function updatePreview(index) {
  const data = courseData[index];
  currentPreviewIndex = index;

  previewMainImg.src = data.img;
  previewCourseTitle.textContent = data.title;
  previewCourseSub.textContent = data.sub;
  previewCourseDesc.textContent = data.desc;
  previewChecklist.innerHTML = data.checks
    .map((c) => `<li><i class="fa-solid fa-check"></i> ${c}</li>`)
    .join("");

  // 썸네일 교체
  previewThumbs.forEach((t, i) => {
    t.src = data.thumbs[i] ?? data.img;
    t.classList.toggle("active", i === 0);
  });

  previewItems.forEach((item) => item.classList.remove("active"));
  previewItems[index].classList.add("active");
}

previewItems.forEach((item) => {
  item.addEventListener("click", () =>
    updatePreview(parseInt(item.dataset.index)),
  );
});

document.getElementById("previewUp").addEventListener("click", () => {
  updatePreview(Math.max(0, currentPreviewIndex - 1));
});
document.getElementById("previewDown").addEventListener("click", () => {
  updatePreview(Math.min(courseData.length - 1, currentPreviewIndex + 1));
});

// 썸네일 클릭
previewThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    previewThumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    previewMainImg.src = thumb.src;
  });
});

/* ────────────────────────────────────────
   맞춤형 패키지 추천 탭
──────────────────────────────────────── */
const recommendTabs = document.querySelectorAll(".recommend-tab");
const recommendPanels = document.querySelectorAll(".recommend-panel");

recommendTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    recommendTabs.forEach((t) => t.classList.remove("active"));
    recommendPanels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelector(`.recommend-panel[data-panel="${tab.dataset.pkg}"]`)
      .classList.add("active");
  });
});

/* ────────────────────────────────────────
   수강후기 슬라이더 (상단 6장/하단 7장, 왕복 자동재생)
──────────────────────────────────────── */
function makeSlider(track, cardsPerView) {
  let index = 0;
  let direction = 1;
  let timer;

  function cardWidth() {
    const card = track.querySelector(".reviews-thumb-card");
    return card ? card.offsetWidth + 16 : 300;
  }
  function maxIndex() {
    const total = track.querySelectorAll(".reviews-thumb-card").length;
    return Math.max(0, total - cardsPerView);
  }
  function move(dir) {
    if (dir !== undefined) direction = dir;
    index += direction;
    if (index >= maxIndex()) {
      index = maxIndex();
      direction = -1;
    } else if (index <= 0) {
      index = 0;
      direction = 1;
    }
    track.style.transform = `translateX(-${index * cardWidth()}px)`;
  }
  function start() {
    timer = setInterval(() => move(), 2500);
  }
  function stop() {
    clearInterval(timer);
  }

  track.style.transition = "transform 0.5s ease";
  start();
  return { move, start, stop };
}

// 상단 6장 → 한 번에 3개 표시
const sliderTop = makeSlider(document.getElementById("reviewsTrackTop"), 3);
// 하단 7장 → 한 번에 4개 표시
const sliderBottom = makeSlider(
  document.getElementById("reviewsTrackBottom"),
  4,
);

document.getElementById("reviewsArrowRight").addEventListener("click", () => {
  sliderTop.stop();
  sliderBottom.stop();
  sliderTop.move(1);
  sliderBottom.move(1);
  sliderTop.start();
  sliderBottom.start();
});
document.getElementById("reviewsArrowLeft").addEventListener("click", () => {
  sliderTop.stop();
  sliderBottom.stop();
  sliderTop.move(-1);
  sliderBottom.move(-1);
  sliderTop.start();
  sliderBottom.start();
});

const viewport = document.querySelector(".reviews-slider-viewport");
viewport.addEventListener("mouseenter", () => {
  sliderTop.stop();
  sliderBottom.stop();
});
viewport.addEventListener("mouseleave", () => {
  sliderTop.start();
  sliderBottom.start();
});

// 오늘 그만보기
const todayClose = document.querySelector(".today-close");
const topBanner = document.querySelector(".top-banner");
const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero-section");
const heroRight = document.querySelector(".hero-right");

function closeBanner() {
  topBanner.style.display = "none";
  header.style.top = "40px"; /* 배너 사라지면 위로 */
  heroRight.style.top = "0px";
  heroRight.style.height = "100%";
  const today = new Date().toDateString();
  localStorage.setItem("bannerClosedDate", today);
}

todayClose.addEventListener("click", closeBanner);

// 페이지 로드 시 오늘 닫았으면 배너 숨김
const bannerClosedDate = localStorage.getItem("bannerClosedDate");
const today = new Date().toDateString();
if (bannerClosedDate === today) {
  closeBanner();
}

// 수강후기 세로 티커 복제
const ticker = document.getElementById("reviewsTicker");
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

// 네비게이션 드롭다운 클릭 토글
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  const link = item.querySelector("a");
  const dropdown = item.querySelector(".nav-dropdown");
  if (!dropdown) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = item.classList.contains("open");

    // 모두 닫기
    navItems.forEach((i) => i.classList.remove("open"));

    // 클릭한 항목 토글
    if (!isOpen) item.classList.add("open");
  });
});

// 드롭다운 외부 클릭 시 닫기
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    navItems.forEach((i) => i.classList.remove("open"));
  }
});

/* ────────────────────────────────────────
   모바일 햄버거 메뉴
──────────────────────────────────────── */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
  mobileMenuClose.addEventListener("click", () =>
    mobileMenu.classList.remove("open"),
  );

  mobileNavItems.forEach((item) => {
    const link = item.querySelector("a");
    const sub = item.querySelector(".mobile-sub-list");
    if (!sub) return;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains("open");
      mobileNavItems.forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

/* ────────────────────────────────────────
   모바일 강의 미리보기 — 카드 클릭 시 아래 표시
──────────────────────────────────────── */
function initMobilePreview() {
  const isMobile = window.innerWidth <= 767;
  const previewRight = document.querySelector(".preview-right");
  const previewList = document.getElementById("previewList");
  if (!previewRight || !previewList) return;

  if (isMobile) {
    previewList.after(previewRight);
    previewRight.classList.remove("mobile-active");
    previewItems.forEach((item) => {
      item.addEventListener("click", () => {
        previewRight.classList.add("mobile-active");
        item.after(previewRight);
      });
    });
  } else {
    const previewSection = document.querySelector(".preview-section");
    previewSection.appendChild(previewRight);
    previewRight.classList.remove("mobile-active");
    previewRight.style.display = "";
  }
}

initMobilePreview();
window.addEventListener("resize", initMobilePreview);

// 모바일(767px 이하)일 때 자격증 검색 라벨 텍스트 변경
function updateCertLabel() {
  const label = document.querySelector(".cert-search-label");
  if (!label) return;
  if (window.innerWidth <= 767) {
    label.textContent = "어떤 자격증이 궁금하세요?";
  } else {
    label.textContent = "어떤 공예 종목의 자격증이 궁금 하신가요?";
  }
}

updateCertLabel();
window.addEventListener("resize", updateCertLabel);
