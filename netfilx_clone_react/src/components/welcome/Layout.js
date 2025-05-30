import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 120px;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
