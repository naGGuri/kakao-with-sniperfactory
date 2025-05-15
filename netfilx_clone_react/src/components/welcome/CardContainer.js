import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 24px;

  width: 100%;
  padding: 20px 20px;
`;

const cardList = [
  {
    id: 1,
    title: "TV로 즐기세요",
    subTitle:
      "스마트 TV PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
  },
  {
    id: 2,
    title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요",
    subTitle: "간편하게 저장하고 빈틈없이 즐겨보세요.",
  },
  {
    id: 3,
    title: "다양한 디바이스로 시청하세요",
    subTitle:
      "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.",
  },
  {
    id: 4,
    title: "어린이 전용 프로필을 만들어 보세요",
    subTitle:
      "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험, 자녀에게 이 특별한 경험을 선물하세요, 넷플릭스 회원이라면 무료입니다.",
  },
];

export default function CardContainer() {
  return (
    <Container>
      {cardList.map((item) => (
        <Card key={item.id} title={item.title} subtitle={item.subTitle} />
      ))}
    </Container>
  );
}
