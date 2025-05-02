document.addEventListener("DOMContentLoaded", () => {
  const visibleCount = 6;
  const itemWidth = 200 + 20; // width + gap
  const videos = Array.from({ length: 12 }, (_, i) => `Video ${i + 1}`);

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const list = carousel.querySelector(".video-list");
    const btnLeft = carousel.querySelector(".btn-left");
    const btnRight = carousel.querySelector(".btn-right");

    // 개별 currentIndex 유지
    let currentIndex = 0;

    // 초기 렌더링
    function renderInitialItems() {
      list.innerHTML = "";
      for (let i = 0; i < videos.length; i++) {
        const item = document.createElement("div");
        item.className = "video-item";
        item.textContent = videos[i];
        list.appendChild(item);
      }
    }

    function slide(direction) {
      const moveBy = visibleCount * itemWidth;

      list.style.transition = "transform 0.5s ease";
      list.style.transform = `translateX(${
        direction === "left" ? moveBy : -moveBy
      }px)`;

      setTimeout(() => {
        if (direction === "right") {
          for (let i = 0; i < visibleCount; i++) {
            list.appendChild(list.firstElementChild);
          }
        } else {
          for (let i = 0; i < visibleCount; i++) {
            list.insertBefore(list.lastElementChild, list.firstElementChild);
          }
        }

        list.style.transition = "none";
        list.style.transform = "translateX(0)";
      }, 500);
    }

    btnLeft.addEventListener("click", () => slide("left"));
    btnRight.addEventListener("click", () => slide("right"));

    renderInitialItems();
  });
});
