// src/components/layout/Search.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import useSearchToggle from '../../hooks/useSearchToggle';

const scaleUpHorRight = keyframes`
  0% {
    transform: scaleX(0.4);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 100% 100%;
  }
`;

const SearchToggle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

const SearchIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 8px;
    height: 40px;
    background-color: rgb(20, 20, 20);
    border-style: solid;
    z-index: 100;
    animation: ${scaleUpHorRight} 0.3s ease forwards;
`;

const SearchInput = styled.input`
    width: 200px;
    height: 32px;
    border: none;
    outline: none;
    font-size: 14px;
    color: white;
    background-color: rgb(20, 20, 20);
`;

export default function Search() {
    const { visible, setVisible, searchBoxRef, triggerRef, inputRef } = useSearchToggle();

    return (
        <SearchToggle>
            {/* 닫힌 상태: 검색 아이콘 */}
            <SearchIcon
                ref={triggerRef}
                src="/sources/header/search.svg"
                alt="검색 아이콘"
                style={{ display: visible ? 'none' : 'block' }}
                onClick={() => setVisible(true)}
            />

            {/* 열린 상태: 검색창 */}
            <SearchBox ref={searchBoxRef} style={{ display: visible ? 'flex' : 'none' }}>
                <SearchIcon src="/sources/header/search.svg" alt="검색 아이콘" />
                <SearchInput ref={inputRef} type="text" placeholder="제목, 장르 등을 검색하세요" />
            </SearchBox>
        </SearchToggle>
    );
}
