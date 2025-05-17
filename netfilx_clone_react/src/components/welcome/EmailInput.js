import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../../reducers/authSlice';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    width: 70%;
    height: 80px;
    padding: 0 20px;
    margin: 40px 0px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

const InputRow = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const StyledInput = styled.input`
    all: unset;

    width: 100%;
    height: 100%;
    padding: 0 12px;

    border: 1px solid gray;
    border-radius: 4px;

    color: white;
    font-size: 16px;
    text-align: start;

    ::placeholder {
        color: gray;
    }
`;

const StartButton = styled.div`
    width: 150px;
    height: 100%;
    padding: 12px;

    border-radius: 4px;
    background-color: red;
    color: white;

    font-size: 20px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;

    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(0.85);
    }
`;

export default function EmailInput() {
    const [email, setEmailInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 시작하기 클릭 시 이메일 저장 + 로그인 페이지 이동
    const handleStart = () => {
        if (email.trim() === '') {
            alert('이메일 주소를 입력하세요.');
            return;
        }

        dispatch(setEmail(email)); // 전역 상태에 이메일 저장
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <Container>
            <Title>시청할 준비가 되셨나요? 이메일 주소를 입력하세요.</Title>
            <InputRow>
                <StyledInput
                    type="email"
                    placeholder="이메일 주소를 입력하세요."
                    value={email}
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                <StartButton onClick={handleStart}>시작하기</StartButton>
            </InputRow>
        </Container>
    );
}
