import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #202020;
  color: white;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
  position: relative;

  transition: background-color 0.3s;
  &:hover {
    background-color: #333;
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Icon = styled.p`
  font-size: 36px;
  user-select: none;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #ccc;
  margin: 0;
  padding: ${({ visible }) => (visible ? "8px 0" : "0")};
  max-height: ${({ visible }) => (visible ? "500px" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export default function Question({ title, subtitle }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container onClick={handleToggle}>
      <Wrapper>
        <TitleRow>
          <Title>{title}</Title>
          <Icon>{isVisible ? "−" : "+"}</Icon>
        </TitleRow>
        <SubTitle visible={isVisible}>{subtitle}</SubTitle>
      </Wrapper>
    </Container>
  );
}
