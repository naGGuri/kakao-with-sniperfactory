import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 224px;
  height: 268px;
  padding: 10px 20px;
  transition: transform 0.3s ease; /* 부드러운 애니메이션 */

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;

export default function Video({ src }) {
  return <StyledImage src={src} alt="video" />;
}
