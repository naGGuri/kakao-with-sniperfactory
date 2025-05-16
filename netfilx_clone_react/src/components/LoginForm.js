// src/components/LoginForm.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 배경 이미지를 포함한 메인 컨테이너
const BackgroundContainer = styled.main`
    position: relative;
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
// 넷플릭스 로고 컴포넌트
const LogoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: flex-start;
`;

const Logo = styled.img`
    height: 40px;
`;

// 로그인 폼 박스
const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 450px;
    padding: 60px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6); // 반투명 검정 배경
    color: white;
`;

// 타이틀 텍스트 스타일
const Title = styled.h2`
    width: 100%;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

// 입력 필드 스타일 (에러 여부에 따라 테두리 색상 변경)
const StyledInput = styled.input`
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid ${(props) => (props.invalid ? 'red' : 'gray')};
    border-radius: 4px;
    background-color: transparent;
    color: white;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.invalid ? 'red' : 'white')};
    }

    &::placeholder {
        font-size: 16px;
    }
`;

// 유효성 에러 메시지 텍스트
const ErrorText = styled.p`
    width: 100%;
    color: red;
    font-size: 14px;
    align-self: flex-start;
`;

// 버튼 스타일 (gray prop에 따라 색상 변경)
const StyledButton = styled.button`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => (props.gray ? 'gray' : 'red')};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: filter 0.2s ease;

    &:hover {
        filter: opacity(0.5);
    }
`;

// 추가 안내 문구와 링크 스타일
const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
`;

// 체크박스와 텍스트 묶음 스타일
const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    align-self: flex-start;
    color: #ccc;

    input[type='checkbox'] {
        width: 20px;
        height: 20px;
        accent-color: #fff;
        cursor: pointer;
    }
`;

// 로그인 폼 컴포넌트 정의
export default function LoginForm({ onLogin }) {
    // 입력값 상태
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // 유효성 에러 상태
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 이메일 유효성 검사 (디바운싱)
    useEffect(() => {
        const timer = setTimeout(() => {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const isPhone = /^\d{10,11}$/.test(email);
            if (email && !(isEmail || isPhone)) {
                setEmailError('정확한 이메일 주소나 전화번호를 입력하세요.');
            } else {
                setEmailError('');
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [email]);

    // 비밀번호 유효성 검사 (디바운싱)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (password && (password.length < 4 || password.length > 60)) {
                setPasswordError('비밀번호는 4자 이상 60자 이하여야 합니다.');
            } else {
                setPasswordError('');
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [password]);

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        // 빈 입력 검사
        if (!email || !password) {
            setEmailError(email ? '' : '이메일을 입력하세요.');
            setPasswordError(password ? '' : '비밀번호를 입력하세요.');
            return;
        }

        // 유효성 에러 존재 시 중단
        if (emailError || passwordError) return;

        // 로그인 요청 콜백 실행
        onLogin({ email, rememberMe });
    };

    return (
        <BackgroundContainer>
            <LogoWrapper>
                <Logo src="/sources/logos/netfilxLogo.svg" alt="넷플릭스 로고" />
            </LogoWrapper>
            <FormBox onSubmit={handleSubmit}>
                <Title>로그인</Title>

                {/* 이메일 입력 */}
                <StyledInput
                    type="email"
                    placeholder="이메일 주소 또는 휴대폰 번호"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    invalid={!!emailError}
                />
                {emailError && <ErrorText>{emailError}</ErrorText>}

                {/* 비밀번호 입력 */}
                <StyledInput
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    invalid={!!passwordError}
                />
                {passwordError && <ErrorText>{passwordError}</ErrorText>}

                {/* 로그인 버튼 */}
                <StyledButton type="submit">로그인</StyledButton>

                <p style={{ color: 'gray' }}>또는</p>

                {/* 로그인 코드 버튼 */}
                <StyledButton type="button" gray>
                    로그인 코드 사용하기
                </StyledButton>

                {/* 비밀번호 찾기 링크 */}
                <a href="#" style={{ color: 'white' }}>
                    비밀번호를 잊으셨나요?
                </a>

                {/* 로그인 정보 저장 체크박스 */}
                <CheckboxWrapper>
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    로그인 정보 저장
                </CheckboxWrapper>

                {/* 안내 정보 영역 */}
                <InfoSection>
                    <span style={{ color: 'gray', fontSize: 16 }}>
                        넷플릭스 회원이 아닌가요? <strong>지금 가입하세요.</strong>
                    </span>
                    <p style={{ color: 'gray' }}>
                        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                    </p>
                    <a href="#" style={{ color: '#00bcd4' }}>
                        자세히 알아보기
                    </a>
                </InfoSection>
            </FormBox>
        </BackgroundContainer>
    );
}
