// document.addEventListener("DOMContentLoaded", () => {
//   const visibleCount = 6;
//   const defaultItemWidth = 248;

//   // 섹션별 이미지 배열
//   const imageMap = {
//     rank: Array.from({ length: 10 }, (_, i) => `./sources/rank/${i + 1}.jpg`),
//     section1: Array.from({ length: 10 }, (_, i) => `./sources/section1/${i + 1}.jpg`),
//     section2: Array.from({ length: 10 }, (_, i) => `./sources/section2/${i + 1}.jpg`),
//     section3: Array.from({ length: 10 }, (_, i) => `./sources/section3/${i + 1}.jpg`),
//     section4: Array.from({ length: 10 }, (_, i) => `./sources/section4/${i + 1}.jpg`),
//   };

//   document.querySelectorAll("[data-carousel]").forEach((carousel) => {
//     const type = carousel.dataset.carouselType || "section1";
//     const data = imageMap[type] || [];
//     const list = carousel.querySelector(".video-list");
//     const btnLeft = carousel.querySelector(".btn-left");
//     const btnRight = carousel.querySelector(".btn-right");

//     const renderInitialItems = () => {
//       list.innerHTML = "";
//       data.forEach((src, i) => {
//         const item = document.createElement("div");
//         item.className = "video-item";

//         if (type === "rank") {
//           const rank = document.createElement("div");
//           rank.className = "rank-number";
//           rank.textContent = i + 1;

//           const img = document.createElement("img");
//           img.src = src;
//           img.alt = `Rank ${i + 1}`;

//           item.appendChild(rank);
//           item.appendChild(img);
//         } else {
//           const img = document.createElement("img");
//           img.src = src;
//           img.alt = `Video ${i + 1}`;
//           item.appendChild(img);
//         }

//         list.appendChild(item);
//       });
//     };

//     const slide = (direction) => {
//       const moveBy = visibleCount * defaultItemWidth;
//       list.style.transition = "transform 0.5s ease";
//       list.style.transform = `translateX(${direction === "left" ? moveBy : -moveBy}px)`;

//       setTimeout(() => {
//         for (let i = 0; i < visibleCount; i++) {
//           direction === "right"
//             ? list.appendChild(list.firstElementChild)
//             : list.insertBefore(list.lastElementChild, list.firstElementChild);
//         }
//         list.style.transition = "none";
//         list.style.transform = "translateX(0)";
//       }, 100);
//     };

//     btnLeft.addEventListener("click", () => slide("left"));
//     btnRight.addEventListener("click", () => slide("right"));

//     renderInitialItems();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const visibleCount = 6;
  const defaultItemWidth = 248;

  // 섹션별 이미지 배열
  const imageMap = {
    rank: Array.from({ length: 10 }, (_, i) => `./sources/rank/${i + 1}.jpg`),
    section1: Array.from(
      { length: 10 },
      (_, i) => `./sources/section1/${i + 1}.jpg`
    ),
    section2: Array.from(
      { length: 10 },
      (_, i) => `./sources/section2/${i + 1}.jpg`
    ),
    section3: Array.from(
      { length: 10 },
      (_, i) => `./sources/section3/${i + 1}.jpg`
    ),
    section4: Array.from(
      { length: 10 },
      (_, i) => `./sources/section4/${i + 1}.jpg`
    ),
  };

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const type = carousel.dataset.carouselType || "section1";
    const data = imageMap[type] || [];
    const list = carousel.querySelector(".video-list");
    const btnLeft = carousel.querySelector(".btn-left");
    const btnRight = carousel.querySelector(".btn-right");

    const renderInitialItems = () => {
      list.innerHTML = "";
      data.forEach((src, i) => {
        const item = document.createElement("div");
        item.className = "video-item";

        if (type === "rank") {
          const rank = document.createElement("div");
          rank.className = "rank-number";
          rank.textContent = i + 1;

          const img = document.createElement("img");
          img.src = src;
          img.alt = `Rank ${i + 1}`;

          item.appendChild(rank);
          item.appendChild(img);
        } else {
          const img = document.createElement("img");
          img.src = src;
          img.alt = `Video ${i + 1}`;
          item.appendChild(img);
        }

        list.appendChild(item);
      });
    };

    const slide = (direction) => {
      const moveBy = visibleCount * defaultItemWidth;
      list.style.transition = "transform 0.5s ease";
      list.style.transform = `translateX(${
        direction === "left" ? moveBy : -moveBy
      }px)`;

      setTimeout(() => {
        for (let i = 0; i < visibleCount; i++) {
          direction === "right"
            ? list.appendChild(list.firstElementChild)
            : list.insertBefore(list.lastElementChild, list.firstElementChild);
        }
        list.style.transition = "none";
        list.style.transform = "translateX(0)";
      }, 100);
    };

    btnLeft.addEventListener("click", () => slide("left"));
    btnRight.addEventListener("click", () => slide("right"));

    renderInitialItems();
  });
});
