// src/components/main/VideoList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem';

// 한 번에 보여줄 항목 수 및 항목 가로폭 정의
const VISIBLE_COUNT = 6;
const ITEM_WIDTH = 236; // 썸네일 너비(228) + 마진(8)
const TOTAL_ITEMS = 12; // 원본 항목 수

// 리스트 전체 컨테이너
const Container = styled.div`
    margin: 40px 0px 20px 0px;
`;

// 섹션 제목 텍스트
const SectionTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 16px;
`;

// 캐러셀 컨테이너
const CarouselContainer = styled.div`
    position: relative;
    overflow: visible;
    z-index: 1;
`;

// 캐러셀 트랙: translateX로 이동 제어
const CarouselTrack = styled.div`
    position: relative;
    overflow: visible;
    z-index: 1;
    display: flex;
    transition: transform 0.3s ease-in-out;
`;

// 비디오 항목 컨테이너
const VideoItemBox = styled.div`
    position: relative;
    overflow: visible;
    z-index: 1;
    flex: 0 0 auto;
    width: 228px;
    margin-right: 8px;
    transition: transform 0.3s ease, z-index 0.3s;

    &.hovered {
        transform: scale(1.4);
        z-index: 100;
    }
`;

// 좌우 이동 버튼
const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: transparent;
    color: white;
    border: none;
    font-size: 32px;
    cursor: pointer;
    padding: 8px;

    &.left {
        left: 10px;
    }
    &.right {
        right: 10px;
    }
`;

// VideoList 캐러셀 컴포넌트
export default function VideoList({ sectionName }) {
    const [startIndex, setStartIndex] = useState(0); // 캐러셀 시작 인덱스
    const [isHovered, setIsHovered] = useState(false); // 캐러셀 hover 여부
    const [hoveredIndex, setHoveredIndex] = useState(null); // 현재 hover된 항목 인덱스

    // 섹션별 이미지 리스트 생성
    const videoImages = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
        src: `sources/main/${sectionName}/${i + 1}.jpg`,
    }));

    // 섹션 이름별 타이틀 정의
    const titles = {
        section1: '평단의 찬사를 받은 드라마',
        section2: '넷플릭스에 새로 올라온 콘텐츠',
        section3: '몰아보기 추천 시리즈',
        section4: '한국 예능',
    };

    // ▶ 오른쪽 이동
    const handleNext = () => {
        setStartIndex((prev) => (prev + VISIBLE_COUNT) % TOTAL_ITEMS);
    };

    // ◀ 왼쪽 이동
    const handlePrev = () => {
        setStartIndex((prev) => (prev - VISIBLE_COUNT + TOTAL_ITEMS) % TOTAL_ITEMS);
    };

    // 현재 캐러셀 트랙의 X 이동 거리 계산
    const trackTranslateX = startIndex * ITEM_WIDTH;

    // 무한 캐러셀을 위한 아이템 복제
    const extendedItems = videoImages.concat(videoImages);

    return (
        <Container>
            {/* 섹션 제목 */}
            <SectionTitle>{titles[sectionName]}</SectionTitle>

            {/* 캐러셀 컨테이너 */}
            <CarouselContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <CarouselTrack style={{ transform: `translateX(-${trackTranslateX}px)` }}>
                    {/* 확장된 썸네일 렌더링 */}
                    {extendedItems.map((item, i) => (
                        <VideoItemBox
                            key={i}
                            className={hoveredIndex === i ? 'hovered' : ''}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <VideoItem src={item.src} expanded={hoveredIndex === i} />
                        </VideoItemBox>
                    ))}
                </CarouselTrack>

                {/* 좌우 이동 버튼 */}
                {isHovered && (
                    <>
                        <NavButton className="left" onClick={handlePrev}>
                            ◀
                        </NavButton>
                        <NavButton className="right" onClick={handleNext}>
                            ▶
                        </NavButton>
                    </>
                )}
            </CarouselContainer>
        </Container>
    );
}
