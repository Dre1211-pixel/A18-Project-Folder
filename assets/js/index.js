
// 輪播功能
document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    // 設定當前幻燈片的索引，初始值為 0（第一張幻燈片）
    let currentIndex = 0;
    const cardWidth = cardContainer.offsetWidth;

    function updateArrows() {
        leftArrow.style.display = currentIndex === 0 ? "none" : "block";
        rightArrow.style.display = currentIndex === cardContainer.children.length - 1 ? "none" : "block";
    }

    updateArrows();

    // 點擊右邊的 arrow 會往右輪播下一張卡片
    rightArrow.addEventListener("click", () => {
        if (currentIndex < cardContainer.children.length - 1) {
            currentIndex++;
            cardContainer.scrollTo({
                left: cardWidth * currentIndex,
                behavior: "smooth"
            });
            updateArrows();
        }
    });

    // 點擊左邊邊的 arrow 會往左輪播下一張卡片
    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            cardContainer.scrollTo({
                left: cardWidth * currentIndex,
                behavior: "smooth"
            });
            updateArrows();
        }
    });
});