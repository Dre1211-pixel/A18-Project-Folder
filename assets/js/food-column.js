// 輪播
// 選取所有的幻燈片元素
const slides = document.querySelectorAll(".slide");
// 獲取幻燈片的總數
const totalSlides = slides.length;
// 設定當前幻燈片的索引，初始值為 0（第一張幻燈片）
let currentIndex = 0;

// 定義一個函數，用於跳轉到指定索引的幻燈片
function goToSlide(slideIndex) {
  // 使用 GSAP 的 to 方法來移動 .carousel 元素，達到切換幻燈片的效果
  gsap.to(".carousel", {
    x: -slideIndex * 100 + "%", // 計算目標位置：每張幻燈片占全寬的百分比
    duration: 0.5, // 設定動畫持續時間為 0.5 秒
    ease: "power1.inOut", // 使用 "power1.inOut" 緩動效果
  });
  // 更新當前幻燈片的索引
  currentIndex = slideIndex;
}

// 為 "Next" 按鈕添加點擊事件監聽器
document.getElementById("next").addEventListener("click", function () {
  // 如果當前索引小於最後一張幻燈片的索引，則跳轉到下一張
  if (currentIndex < totalSlides - 1) {
    goToSlide(currentIndex + 1);
  } else {
    // 如果已經是最後一張幻燈片，則跳轉到第一張
    goToSlide(0); // 或根據需要保持在最後一張
  }
});

// 為 "Prev" 按鈕添加點擊事件監聽器
document.getElementById("prev").addEventListener("click", function () {
  // 如果當前索引大於 0，即不是第一張幻燈片，則跳轉到上一張
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    // 如果已經是第一張幻燈片，則跳轉到最後一張
    goToSlide(totalSlides - 1); // 或根據需要保持在第一張
  }
});

// 精選店家輪播
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
