import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-top: 40px;
    width: 100%;
    padding: 0px 20px;
    text-align: start;
`;

export default function SubTitle({ children }) {
    return <Title>{children}</Title>;
}
