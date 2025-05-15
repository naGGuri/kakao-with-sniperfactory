import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: transparent;

  padding: 10px 100px 0px 100px;
  height: 70px;
  width: 100%;

  z-index: 10;
`;

const Wrapper1 = styled.div``;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 148px;
  height: 40px;
`;

const Dropdown = styled.select`
  width: 120px;
  height: 36px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #aaa, 0.5;
  border-radius: 4px;
  padding: 4px 12px;
`;

const LoginButton = styled.div`
  background-color: red;
  padding: 6px 12px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.85);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Wrapper1>
        <Logo src="/sources/logos/netfilxLogo.svg" alt="넷플릭스 로고" />
      </Wrapper1>
      <Wrapper2>
        <Dropdown>
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </Dropdown>
        <LoginButton>로그인</LoginButton>
      </Wrapper2>
    </HeaderContainer>
  );
}
