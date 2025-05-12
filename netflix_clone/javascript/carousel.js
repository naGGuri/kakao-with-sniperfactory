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

          // hover시, 💳 카드 프리뷰
          item.addEventListener("mouseenter", () => {
            const content = document.createElement("div");
            content.className = "card-content";

            // 아이콘 wrapper
            const iconRow = document.createElement("div");
            iconRow.className = "icon-row";

            const leftIcons = document.createElement("div");
            leftIcons.className = "left-icons";

            const rightIcons = document.createElement("div");
            rightIcons.className = "right-icons";

            // 왼쪽 3개
            [
              { src: "/sources/play.png", alt: "재생" },
              { src: "/sources/add.png", alt: "찜" },
              { src: "/sources/like.png", alt: "좋아요" },
            ].forEach(({ src, alt }) => {
              const icon = document.createElement("img");
              icon.className = "card-icon";
              icon.src = src;
              icon.alt = alt;
              leftIcons.appendChild(icon);
            });

            // 오른쪽 1개
            const downIcon = document.createElement("img");
            downIcon.className = "card-icon";
            downIcon.src = "/sources/arrow_down_circle.png"; // 다운 아이콘
            downIcon.alt = "더보기";
            rightIcons.appendChild(downIcon);

            // 조립
            iconRow.appendChild(leftIcons);
            iconRow.appendChild(rightIcons);

            // 설명
            const desc = document.createElement("p");
            desc.className = "card-desc";
            desc.textContent = "카드 설명 영역입니다.";

            content.appendChild(iconRow);
            content.appendChild(desc);
            item.appendChild(content);
          });

          // hover 벗어나면 제거
          item.addEventListener("mouseleave", () => {
            const content = item.querySelector(".card-content");
            if (content) content.remove();
          });
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
