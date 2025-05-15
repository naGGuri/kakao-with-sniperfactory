import React from "react";
import styled from "styled-components";
import Video from "./Video";

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  width: 100%;
  height: 268px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export default function VideoContainer() {
  const imageList = Array.from(
    { length: 10 },
    (_, i) => `/sources/welcome/video/${i + 1}.png`
  );

  return (
    <Container>
      {imageList.map((src, index) => (
        <Video key={index} src={src} alt={`이미지 ${index + 1}`} />
      ))}
    </Container>
  );
}
