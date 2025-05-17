// src/components/layout/Header.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 전체 헤더 컨테이너 (절대 위치 상단 고정)
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 10px 100px 0;

    background-color: transparent;
    z-index: 10;
`;

// 왼쪽 래퍼 (로고)
const Wrapper1 = styled.div``;

// 오른쪽 래퍼 (언어 드롭다운 + 로그인 버튼)
const Wrapper2 = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

// 넷플릭스 로고 이미지
const Logo = styled.img`
    width: 148px;
    height: 40px;
`;

// 언어 선택 드롭다운
const Dropdown = styled.select`
    width: 120px;
    height: 36px;
    padding: 4px 12px;

    background: black;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #aaa;
    border-radius: 4px;
`;

// 로그인 버튼
const LoginButton = styled.div`
    padding: 6px 12px;
    border-radius: 4px;

    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;

    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(0.85);
    }
`;

// Header 컴포넌트 정의
export default function Header() {
    const navigate = useNavigate();

    // 로그인 버튼 클릭 시 로그인 페이지로 이동
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <HeaderContainer>
            {/* 좌측: 로고 */}
            <Wrapper1>
                <Logo src="/sources/logos/netfilxLogo.svg" alt="넷플릭스 로고" />
            </Wrapper1>

            {/* 우측: 언어 선택 + 로그인 버튼 */}
            <Wrapper2>
                <Dropdown>
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                </Dropdown>
                <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
            </Wrapper2>
        </HeaderContainer>
    );
}
