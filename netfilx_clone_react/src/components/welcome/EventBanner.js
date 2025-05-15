import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 80px;
  background-color: #222;
  color: white;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  gap: 20px;

  background: linear-gradient(135deg, #000c1a, #4b0082);
  border-radius: 12px;

  transition: scale 0.3s ease;

  &:hover {
    scale: 1.1;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Text1 = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const Text2 = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

const Button = styled.div`
  width: 160px;
  height: 50px;
  background-color: gray;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  padding: 16px 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    &:hover {
      filter: brightness(0.85);
    }
  }
`;

export default function EventBanner() {
  return (
    <Container>
      <Wrapper>
        <Icon></Icon>
        <TextContainer>
          <Text1>7.000원이면 만날 수 있는 넷플릭스.</Text1>
          <Text2>가장 경제적인 광고형 멤버십을 이용해 보세요.</Text2>
        </TextContainer>
        <Button>자세히 알아보기</Button>
      </Wrapper>
    </Container>
  );
}
