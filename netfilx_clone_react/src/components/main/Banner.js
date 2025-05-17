// src/components/main/Banner.js
import React from 'react';
import styled from 'styled-components';

// 전체 배너 컨테이너 (섹션 형태)
const BannerContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
`;

// 배경 이미지
const BannerImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

// 배너 상세 정보 오버레이
const BannerDetail = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 540px;
    gap: 20px;
    top: 45%;
    left: 5%;
    background-color: transparent;
`;

// 로고 이미지
const BannerLogo = styled.img`
    width: 530px;
    height: 240px;
    background-color: transparent;
`;

// 설명 문단
const BannerComment = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: white;
    background-color: transparent;
`;

// 버튼 컨테이너
const BannerButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
`;

// 재생 버튼
const PlayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: white;
    color: black;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    padding: 0 40px;

    &:hover {
        opacity: 0.8;
    }
`;

// 상세 정보 버튼
const InfoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: gray;
    color: white;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    padding: 0 40px;

    &:hover {
        opacity: 0.8;
    }
`;

// Banner 컴포넌트
export default function Banner() {
    return (
        <BannerContainer>
            {/* 배경 이미지 */}
            <BannerImage src="/sources/main/banner.webp" alt="배너" />

            {/* 배너 설명 영역 */}
            <BannerDetail>
                <BannerLogo src="/sources/main/banner2.webp" alt="배너 로고" />
                <BannerComment>
                    무도회에서 우승한 뒤, 결혼을 하고 아들도 얻은 오공은 행복한 나날을 보내고 있었다. 하지만 지구를
                    약탈하기 위해 속속 침략해 오는 우주인들에 맞서
                    <br />
                    싸워야 할 시간이 찾아온다.
                </BannerComment>

                {/* 버튼 영역 */}
                <BannerButtonContainer>
                    <PlayButton>재생</PlayButton>
                    <InfoButton>상세 정보</InfoButton>
                </BannerButtonContainer>
            </BannerDetail>
        </BannerContainer>
    );
}
