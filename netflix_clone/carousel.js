document.addEventListener("DOMContentLoaded", () => {
  const visibleCount = 6;

  const rankImages = Array.from(
    { length: 10 },
    (_, i) => `./sources/rank/${i + 1}.jpg`
  );
  const section1Images = Array.from(
    { length: 10 },
    (_, i) => `./sources/section1/${i + 1}.jpg`
  );
  const section2Images = Array.from(
    { length: 10 },
    (_, i) => `./sources/section2/${i + 1}.jpg`
  );
  const section3Images = Array.from(
    { length: 10 },
    (_, i) => `./sources/section3/${i + 1}.jpg`
  );
  const section4Images = Array.from(
    { length: 10 },
    (_, i) => `./sources/section4/${i + 1}.jpg`
  );

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const list = carousel.querySelector(".video-list");
    const btnLeft = carousel.querySelector(".btn-left");
    const btnRight = carousel.querySelector(".btn-right");

    const isRank = carousel.classList.contains("rank-carousel-wrapper");
    const isSection1 = carousel.classList.contains("section1-carousel");
    const isSection2 = carousel.classList.contains("section2-carousel");
    const isSection3 = carousel.classList.contains("section3-carousel");
    const isSection4 = carousel.classList.contains("section4-carousel");

    // 데이터 선택
    const data = isRank
      ? rankImages
      : isSection1
      ? section1Images
      : isSection2
      ? section2Images
      : isSection3
      ? section3Images
      : isSection4
      ? section4Images
      : [];

    const itemWidth = isRank ? 246 : 248; // 226+20 or 228+20

    function renderInitialItems() {
      list.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const item = document.createElement("div");
        item.className = "video-item";

        if (isRank) {
          const rank = document.createElement("div");
          rank.className = "rank-number";
          rank.textContent = i + 1;

          const img = document.createElement("img");
          img.src = data[i];
          img.alt = `Rank ${i + 1}`;

          item.appendChild(rank);
          item.appendChild(img);
        } else {
          const img = document.createElement("img");
          img.src = data[i];
          img.alt = `Video ${i + 1}`;
          item.appendChild(img);
        }

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
        for (let i = 0; i < visibleCount; i++) {
          if (direction === "right") {
            list.appendChild(list.firstElementChild);
          } else {
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
