// src/components/layout/Header.js
import React from 'react';
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
    height: 70px;
    padding: 0 80px;
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
    height: 100%;

    p {
        font-size: 16px;
        font-weight: 400;
        color: white;
        cursor: pointer;
        transition: filter 0.3s ease;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

const Nav2 = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    color: white;
    position: relative;
`;

export default function Header() {
    const isTop = useScrollHeader();

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
                <Alert />
                <Profile />
            </Nav2>
        </Container>
    );
}
