import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 300px;
  padding: 18px;
  background: linear-gradient(135deg, #000c1a, #4b0082);
  border-radius: 16px;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #aaa;
  margin: 0;
`;

// const Icon = styled.img`
//   width: 64px;
//   height: 64px;
//   object-fit: contain;
// `;

export default function Card({ title, subtitle }) {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {/* <Icon></Icon> */}
      </Wrapper>
    </Container>
  );
}
