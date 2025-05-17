// src/components/main/Profile.js
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/authSlice';
import useClickOutside from '../../hooks/useClickOutside';

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const Container = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    background-color: rgb(20, 20, 20, 0.9);
    border: 1px solid #333;
    z-index: 100;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 0;
`;

const MenuItem = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    text-align: left;
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #333;
    }
`;

export default function Profile() {
    const { visible, setVisible, childrenBoxRef, triggerRef } = useClickOutside();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div style={{ position: 'relative' }}>
            <ProfileWrapper ref={triggerRef} onClick={() => setVisible((prev) => !prev)}>
                <Icon src="/sources/header/user.svg" alt="사용자 아이콘" />
                <Icon src="/sources/header/arrow_drop_down.svg" alt="드롭다운 아이콘" />
            </ProfileWrapper>

            {visible && (
                <Container ref={childrenBoxRef}>
                    <Wrapper>
                        <MenuItem>프로필 관리</MenuItem>
                        <MenuItem>프로필 이전</MenuItem>
                        <MenuItem>계정</MenuItem>
                        <MenuItem>고객 센터</MenuItem>
                        <MenuItem onClick={handleLogout}>넷플릭스에서 로그아웃</MenuItem>
                    </Wrapper>
                </Container>
            )}
        </div>
    );
}
