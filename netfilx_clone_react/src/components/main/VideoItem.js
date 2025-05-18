// src/components/main/VideoItem.js
import React from 'react';
import styled from 'styled-components';

// 비디오 항목 전체 컨테이너
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
`;

// 썸네일 이미지
const Thumbnail = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    display: block;
`;

// 상세 정보 오버레이 (절대 위치, 레이아웃 밀림 방지)
const DetailOverlay = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 12px;
    background-color: rgb(30, 30, 30);
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 10;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

// 아이콘 그룹 전체 래퍼
const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// 좌/우 아이콘 그룹 묶음
const IconGroup = styled.div`
    display: flex;
    gap: 12px;
`;

// 개별 아이콘
const Icon = styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
`;

// VideoItem 컴포넌트 정의
// src: 썸네일 이미지 경로
// expanded: hover 여부에 따라 상세 오버레이 표시
export default function VideoItem({ src, expanded }) {
    return (
        <Container>
            {/* 썸네일 이미지 */}
            <Thumbnail src={src} alt="비디오 썸네일" />

            {/* hover 상태일 때 상세 정보 오버레이 */}
            {expanded && (
                <DetailOverlay>
                    {/* 아이콘 섹션 */}
                    <IconsWrapper>
                        {/* 왼쪽 아이콘 그룹 (재생, 찜, 좋아요) */}
                        <IconGroup>
                            <Icon src="/sources/main/video/play.png" alt="재생 아이콘" />
                            <Icon src="/sources/main/video/add.png" alt="찜 아이콘" />
                            <Icon src="/sources/main/video/like.png" alt="좋아요 아이콘" />
                        </IconGroup>

                        {/* 오른쪽 아이콘 (회차 정보) */}
                        <IconGroup>
                            <Icon src="/sources/main/video/arrow_down_circle.png" alt="회차 정보" />
                        </IconGroup>
                    </IconsWrapper>

                    {/* 상세 설명 텍스트 */}
                    {/* <p style={{ fontSize: '14px', opacity: 0.8 }}>비디오 설명 영역입니다.</p> */}
                </DetailOverlay>
            )}
        </Container>
    );
}
