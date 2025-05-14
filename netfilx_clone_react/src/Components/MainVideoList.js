import { useState, useRef } from "react";
import MainVideoItem from "./MainVideoItem";
import "../Styles/MainVideoList.css";

const VISIBLE_COUNT = 6; // 한 번에 보여줄 아이템 수
const ITEM_WIDTH = 228 + 8; // 각 아이템의 가로 너비 + gap(간격)

export default function MainVideoList({ sectionName }) {
  // 캐러셀 슬라이드 시작 위치 인덱스 (0~9)
  const [startIndex, setStartIndex] = useState(0);

  // 각 캐러셀의 hover 상태 (true일 때만 버튼 표시)
  const [isHovered, setIsHovered] = useState(false);

  // Hover된 이미지 인덱스 및 좌표 (고정된 위치에 카드 표시)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const itemRefs = useRef([]); // 이미지 DOM 참조 저장용

  const totalItems = 12;

  // 섹션 이름별 이미지 목록 생성
  const videoImages = Array.from({ length: totalItems }, (_, i) => ({
    src: `sources/${sectionName}/${i + 1}.jpg`,
  }));

  const videoListTitles = {
    section1: "평단의 찬사를 받은 드라마",
    section2: "넷플릭스에 새로 올라온 콘텐츠",
    section3: "몰아보기 추천 시리즈",
    section4: "한국 예능",
  };

  // ▶ 오른쪽으로 6칸 이동 (무한 루프)
  const handleNext = () => {
    setStartIndex((prev) => (prev + VISIBLE_COUNT) % totalItems);
  };

  // ◀ 왼쪽으로 6칸 이동 (무한 루프)
  const handlePrev = () => {
    setStartIndex((prev) => (prev - VISIBLE_COUNT + totalItems) % totalItems);
  };

  // hover된 이미지 위에 고정 카드 위치 설정
  const handleMouseEnter = (index) => {
    setTimeout(() => {
      const rect = itemRefs.current[index]?.getBoundingClientRect();
      if (rect) {
        setHoverPosition({ top: rect.top, left: rect.left });
        setHoveredIndex(index);
      }
    }, [300]);
  };

  // hover 해제 시 카드 제거
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // 실제 transform 이동 거리 계산
  const trackTranslateX = startIndex * ITEM_WIDTH;

  // 실제 렌더링은 모든 이미지 + 복제본 (슬라이드 트릭용)
  const extendedItems = videoImages.concat(videoImages);

  return (
    <div className="video-list-wrapper">
      {/* 섹션 제목 */}
      <p className="video-list-title">{videoListTitles[sectionName]}</p>

      {/* 캐러셀 전체 영역 (hover 시 버튼 보여짐) */}
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 뷰포트 */}
        <div className="carousel-window">
          {/* 트랙 (전체 아이템을 translateX로 이동시킴) */}
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${trackTranslateX}px)`,
            }}
          >
            {extendedItems.map((item, i) => (
              <div
                className="video-item"
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onMouseEnter={() => handleMouseEnter(i % totalItems)}
                onMouseLeave={handleMouseLeave}
              >
                <img className="video-image" src={item.src} alt="" />
              </div>
            ))}
          </div>

          {/* 좌우 버튼은 캐러셀 hover 상태일 때만 표시 */}
          {isHovered && (
            <>
              <button className="carousel-button left" onClick={handlePrev}>
                ◀
              </button>
              <button className="carousel-button right" onClick={handleNext}>
                ▶
              </button>
            </>
          )}
        </div>
      </div>

      {/* Hover된 이미지 위에 표시되는 팝업 카드 */}
      {hoveredIndex !== null && (
        <div
          className="floating-video-item"
          style={{
            position: "fixed",
            top: hoverPosition.top,
            left: hoverPosition.left,
            zIndex: 9999,
            transform: "translate(-20%, -40%)", // 정중앙 기준 위치 보정
          }}
        >
          <MainVideoItem src={videoImages[hoveredIndex].src} />
        </div>
      )}
    </div>
  );
}
