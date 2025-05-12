document.addEventListener("DOMContentLoaded", () => {
  const visibleCount = 6;
  const defaultItemWidth = 248; // 슬라이드 애니메이션을 위한 기본 아이템 너비

  // 섹션별 이미지 배열
  const imageMap = {
    rank: Array.from({ length: 10 }, (_, i) => `/sources/rank/${i + 1}.jpg`),
    section1: Array.from(
      { length: 10 },
      (_, i) => `/sources/section1/${i + 1}.jpg`
    ),
    section2: Array.from(
      { length: 10 },
      (_, i) => `/sources/section2/${i + 1}.jpg`
    ),
    section3: Array.from(
      { length: 10 },
      (_, i) => `/sources/section3/${i + 1}.jpg`
    ),
    section4: Array.from(
      { length: 10 },
      (_, i) => `/sources/section4/${i + 1}.jpg`
    ),
  };

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const type = carousel.dataset.carouselType || "section1";
    const data = imageMap[type] || [];
    const list = carousel.querySelector(".video-list");
    const btnLeft = carousel.querySelector(".btn-left");
    const btnRight = carousel.querySelector(".btn-right");

    const showVideoList = () => {
      list.innerHTML = ""; // 초기화면을 비우기

      // 비디오 리스트 동적 생성
      data.forEach((src, i) => {
        const item = document.createElement("div");
        item.className = "video-item";

        if (type === "rank") {
          // 랭크 섹션일 경우
          const rank = document.createElement("div"); // 사진옆 랭크 번호
          rank.className = "rank-number";
          rank.textContent = i + 1;

          const img = document.createElement("img");
          img.src = src;
          img.alt = `Rank ${i + 1}`;

          item.appendChild(rank);
          item.appendChild(img);
        } else {
          // 그외 일반 섹션일 경우
          const img = document.createElement("img");
          img.src = src;
          img.alt = `Video ${i + 1}`;
          item.appendChild(img);

          // 💳 카드 프리뷰 컴포넌트 동적 생성
          // item.addEventListener("mouseenter", () => {
          //   if (item.querySelector(".card-popup")) return; // 이미 카드가 있으면 추가 생성하지 않음

          //   const card = document.createElement("div");
          //   card.className = "card-popup";

          //   const previewImage = document.createElement("img");
          //   previewImage.className = "card-preview-image";
          //   previewImage.src = src;

          //   const iconContainer = document.createElement("div");
          //   iconContainer.className = "card-icon-container";

          //   const icons = [
          //     { src: "/sources/user.svg", alt: "Play Icon" },
          //     { src: "/sources/user.svg", alt: "Plus Icon" },
          //     { src: "/sources/user.svg", alt: "Delete Icon" },
          //     { src: "/sources/user.svg", alt: "Like Icon" },
          //     { src: "/sources/user.svg", alt: "Down Icon" },
          //   ];

          //   icons.forEach(({ src, alt }) => {
          //     const icon = document.createElement("img");
          //     icon.className = "card-icon";
          //     icon.src = src;
          //     icon.alt = alt;
          //     iconContainer.appendChild(icon);
          //   });

          //   const infoContainer = document.createElement("div");
          //   infoContainer.className = "card-info-container";

          //   const infoMark = document.createElement("img");
          //   infoMark.className = "card-info-mark";
          //   infoMark.src = "/sources/user.svg";
          //   infoMark.alt = "Info Mark Icon";

          //   const desc = document.createElement("p");
          //   desc.className = "card-desc";
          //   desc.textContent = "마음이 편해지는 · 기분 좋아지는";

          //   item.appendChild(card);

          //   card.appendChild(previewImage);
          //   card.appendChild(iconContainer);
          //   card.appendChild(infoContainer);
          //   card.appendChild(desc);
          //   infoContainer.appendChild(infoMark);
          // });

          // // hover 벗어나면 제거
          // item.addEventListener("mouseleave", () => {
          //   const card = item.querySelector(".card-popup");
          //   if (card) card.remove();
          // });
        }

        list.appendChild(item);
      });
    };

    // 슬라이드 애니메이션
    const slide = (direction) => {
      const moveBy = visibleCount * defaultItemWidth; // 이동할 거리
      list.style.transition = "transform 0.5s ease"; // 애니메이션 효과
      list.style.transform = `translateX(${
        direction === "left" ? moveBy : -moveBy
      }px)`;

      // 애니메이션이 끝난 후에 아이템을 이동
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

    // 버튼 클릭 이벤트
    btnLeft.addEventListener("click", () => slide("left"));
    btnRight.addEventListener("click", () => slide("right"));

    showVideoList();
  });
});
