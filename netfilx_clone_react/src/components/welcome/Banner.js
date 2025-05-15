import React from "react";
import styled from "styled-components";
import EventBanner from "./EventBanner";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 900px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    background-image: url("/sources/welcome/banner.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1; /* 콘텐츠는 위에 올라오도록 */
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Section1 = styled.div`
  text-align: center;
  color: white;
  background-color: transparent;
  margin-top: 300px;
`;

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

const Section2 = styled.div`
  width: 100%;
`;

export default function Banner() {
  return (
    <>
      <Container>
        <Wrapper>
          <Section1>
            <TextContainer>
              <Text1>
                영화, 시리즈 등을 <br />
                무제한으로
              </Text1>
              <Text2>
                7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
              </Text2>
              <Text3>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
              </Text3>
            </TextContainer>
            <InputContainer>
              <EmailInput
                type="email"
                placeholder="이메일 주소를 입력하세요."
              />
              <StartButton>시작하기</StartButton>
            </InputContainer>
          </Section1>
          <Section2>
            <EventBanner />
          </Section2>
        </Wrapper>
      </Container>
    </>
  );
}
