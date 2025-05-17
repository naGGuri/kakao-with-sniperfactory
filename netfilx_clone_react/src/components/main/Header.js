// src/components/layout/Header.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useScrollHeader from '../../hooks/useScrollHeader';
import Search from './Search';
import Alert from './Alert';
import Profile from './Profile';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 70px;
    z-index: 2;
    background-color: ${(props) => (props.transparent ? 'rgba(20, 20, 20, 0.1)' : 'rgb(20, 20, 20)')};
    transition: background-color 0.3s ease;
`;

const Logo = styled.img`
    width: 90px;
    height: 30px;
    margin-right: 30px;
    cursor: pointer;
`;

const Nav1 = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 50px;
    height: 100%;

    p {
        font-size: 16px;
        font-weight: 300;
        color: #e5e5e5;
        cursor: pointer;
        &:hover {
            color: gray;
            opacity: 0.8;
        }
    }
`;

const Nav2 = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 50px;
    height: 100%;
    color: #e5e5e5;
    position: relative;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export default function Header() {
    const isTop = useScrollHeader();
    const [showAlertBox, setShowAlertBox] = useState(false);
    const [showProfileBox, setShowProfileBox] = useState(false);

    const alertRef = useRef(null);
    const profileRef = useRef(null);

    // 외부 클릭 시 Alert/Profile 박스 닫기
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (alertRef.current && !alertRef.current.contains(e.target)) {
                setShowAlertBox(false);
            }
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowProfileBox(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAlertClick = () => {
        setShowAlertBox((prev) => !prev);
    };

    const handleProfileClick = () => {
        setShowProfileBox((prev) => !prev);
    };

    return (
        <Container transparent={isTop}>
            <Nav1>
                <a href="/">
                    <Logo src="/sources/header/netfilxLogo.svg" alt="넷플릭스 로고" />
                </a>
                <p>홈</p>
                <p>시리즈</p>
                <p>영화</p>
                <p>게임</p>
                <p>NEW! 요즘 대세 콘텐츠</p>
                <p>내가 찜한 리스트</p>
                <p>언어별로 찾아보기</p>
            </Nav1>

            <Nav2>
                <Search />
                <Icon src="/sources/header/bell.svg" alt="알림 아이콘" onClick={handleAlertClick} />
                {showAlertBox && (
                    <div ref={alertRef}>
                        <Alert />
                    </div>
                )}
                <ProfileWrapper onClick={handleProfileClick}>
                    <Icon src="/sources/header/user.svg" alt="사용자 아이콘" />
                    <Icon src="/sources/header/arrow_drop_down.svg" alt="드롭다운 아이콘" />
                </ProfileWrapper>
                {showProfileBox && (
                    <div ref={profileRef}>
                        <Profile />
                    </div>
                )}
            </Nav2>
        </Container>
    );
}
