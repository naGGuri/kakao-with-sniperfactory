import { useEffect, useRef } from "react";

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

export default function Carousel({ type = "section1" }) {
  const listRef = useRef(null);
  const visibleCount = 6;
  const defaultItemWidth = 248;

  useEffect(() => {
    const list = listRef.current;
    const data = imageMap[type] || [];
    if (!list) return;
    list.innerHTML = "";

    data.forEach((src, i) => {
      const item = document.createElement("div");
      item.className = "video-item";

      if (type === "rank") {
        const rank = document.createElement("p");
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

        item.addEventListener("mouseenter", () => {
          const content = document.createElement("div");
          content.className = "card-content";

          const iconRow = document.createElement("div");
          iconRow.className = "icon-row";

          const leftIcons = document.createElement("div");
          leftIcons.className = "left-icons";
          const rightIcons = document.createElement("div");
          rightIcons.className = "right-icons";

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

          const downIcon = document.createElement("img");
          downIcon.className = "card-icon";
          downIcon.src = "/sources/arrow_down_circle.png";
          downIcon.alt = "더보기";
          rightIcons.appendChild(downIcon);

          iconRow.appendChild(leftIcons);
          iconRow.appendChild(rightIcons);

          const desc = document.createElement("p");
          desc.className = "card-desc";
          desc.textContent = "카드 설명 영역입니다.";

          content.appendChild(iconRow);
          content.appendChild(desc);
          item.appendChild(content);
        });

        item.addEventListener("mouseleave", () => {
          const content = item.querySelector(".card-content");
          if (content) content.remove();
        });
      }

      list.appendChild(item);
    });
  }, [type]);

  const slide = (direction) => {
    const list = listRef.current;
    if (!list) return;
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

  return (
    <div className="carousel-wrapper" data-carousel data-carousel-type={type}>
      <img
        src="/sources/arrow_left.svg"
        className="btn-left"
        alt="왼쪽"
        onClick={() => slide("left")}
      />
      <div className="video-list" ref={listRef}></div>
      <img
        src="/sources/arrow_right.svg"
        className="btn-right"
        alt="오른쪽"
        onClick={() => slide("right")}
      />
    </div>
  );
}
