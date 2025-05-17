// src/components/layout/Banner.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../../reducers/authSlice';
import EventBanner from './EventBanner';

// 배경 포함한 메인 배너 컨테이너
const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 900px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 900px;
        background-image: url('/sources/welcome/banner.jpg');
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        z-index: 0;
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`;

// 전체 콘텐츠 정렬 래퍼
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
`;

// 상단 설명 섹션
const Section1 = styled.div`
    text-align: center;
    color: white;
    background-color: transparent;
    margin-top: 300px;
`;

// 텍스트 정렬용 컨테이너
const TextContainer = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
`;

const Text1 = styled.p`
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const Text2 = styled.p`
    font-size: 20px;
    margin-bottom: 12px;
`;

const Text3 = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
    font-weight: normal;
`;

// 이메일 입력 행 (입력창 + 버튼)
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    height: 50px;
`;

const EmailInput = styled.input`
    all: unset;
    width: 350px;
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

const StartButton = styled.button`
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
    border: none;

    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(0.85);
    }
`;

// 하단 이벤트 배너 섹션
const Section2 = styled.div`
    width: 100%;
`;

// Banner 컴포넌트
export default function Banner() {
    const [email, setEmailInput] = useState(''); // 입력 상태 관리
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 시작하기 버튼 클릭 시 처리
    const handleStart = () => {
        if (email.trim() === '') {
            alert('이메일 주소를 입력하세요.');
            return;
        }

        dispatch(setEmail(email)); // Redux 상태에 저장
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <Container>
            <Wrapper>
                {/* 상단 텍스트 영역 */}
                <Section1>
                    <TextContainer>
                        <Text1>
                            영화, 시리즈 등을 <br />
                            무제한으로
                        </Text1>
                        <Text2>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</Text2>
                        <Text3>
                            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                        </Text3>
                    </TextContainer>

                    {/* 이메일 입력 + 시작하기 */}
                    <InputContainer>
                        <EmailInput
                            type="email"
                            placeholder="이메일 주소를 입력하세요."
                            value={email}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <StartButton onClick={handleStart}>시작하기</StartButton>
                    </InputContainer>
                </Section1>

                {/* 하단 이벤트 섹션 */}
                <Section2>
                    <EventBanner />
                </Section2>
            </Wrapper>
        </Container>
    );
}
