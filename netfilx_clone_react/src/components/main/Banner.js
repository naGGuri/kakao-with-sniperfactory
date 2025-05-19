// src/components/main/Banner.js

import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

// 배경 이미지
const BannerImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
`;

// 배너 설명 오버레이
const BannerDetail = styled.div`
    position: absolute;
    top: 60%;
    left: 5%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 2vw;
    width: clamp(280px, 40vw, 540px);
    max-width: 90%;
    color: white;
`;

// 로고 이미지
const BannerLogo = styled.img`
    width: 100%;
    height: auto;
    max-height: 30vh;
    object-fit: contain;
`;

// 설명 문단
const BannerComment = styled.p`
    font-size: clamp(14px, 1.4vw, 18px);
    font-weight: bold;
    line-height: 1.6;
    color: white;
`;

// 버튼 컨테이너
const BannerButtonContainer = styled.div`
    font-weight: bold;
    display: flex;
    gap: 1vw;
    flex-wrap: wrap;
`;

// 공통 버튼 스타일
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 2rem;
    border-radius: 4px;
    font-size: clamp(14px, 1.2vw, 18px);
    cursor: pointer;
    border: none;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.85;
    }
`;

// 개별 버튼 스타일
const PlayButton = styled(Button)`
    background-color: white;
    color: black;
`;

const InfoButton = styled(Button)`
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
`;

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImage src="/sources/main/banner.webp" alt="배경 이미지" />

            <BannerDetail>
                <BannerLogo src="/sources/main/banner2.webp" alt="로고" />
                <BannerComment>
                    무도회에서 우승한 뒤, 결혼을 하고 아들도 얻은 오공은 행복한 나날을 보내고 있었다. 하지만 지구를
                    약탈하기 위해 속속 침략해 오는 우주인들에 맞서
                    <br />
                    싸워야 할 시간이 찾아온다.
                </BannerComment>

                <BannerButtonContainer>
                    <PlayButton>재생</PlayButton>
                    <InfoButton>상세 정보</InfoButton>
                </BannerButtonContainer>
            </BannerDetail>
        </BannerContainer>
    );
}
