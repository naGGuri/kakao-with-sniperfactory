// src/components/layout/HeaderAlert.js
import React from 'react';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';

const alertList = [
    {
        id: 1,
        title: '5월 13일 공개',
        content: '지금 예고편을 시청하세요',
        date: '1일',
        src: '/sources/header/alert_box/1.png',
    },
    {
        id: 2,
        title: 'SBS, 드디어 넷플에 상륙',
        content: '드라마와 예능을 모두 만나보세요',
        date: '1주 전',
        src: '/sources/header/alert_box/2.png',
    },
    {
        id: 3,
        title: '신규 콘텐츠',
        content: '천국보다 아름다운',
        date: '2주 전',
        src: '/sources/header/alert_box/3.png',
    },
    {
        id: 4,
        title: '신규 콘텐츠',
        content: '귀궁',
        date: '3주 전',
        src: '/sources/header/alert_box/4.png',
    },
    {
        id: 5,
        title: '신규 콘텐츠',
        content: '정글밥2 - 카리브밥',
        date: '3주 전',
        src: '/sources/header/alert_box/5.png',
    },
];

const AlertIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

// 스타일드 컴포넌트 정의 (원래 CSS 스타일에 최대한 맞춤)
const Container = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: 400px;
    max-height: 600px;
    background-color: rgb(20, 20, 20);
    border: 1px solid #333;
    overflow-y: auto;
    z-index: 100;
`;
const AlertWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AlertItem = styled.div`
    display: flex;
    padding: 12px;
    color: white;

    &:hover {
        background-color: rgb(20, 20, 20);
    }
`;

const AlertImage = styled.img`
    width: 120px;
    height: 80px;
    border-radius: 4px;
    margin-right: 12px;
`;

const AlertText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
        color: #fff;
    }

    p {
        font-size: 12px;
        color: #888;
        margin-top: 4px;
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: #333;
    margin: 0 12px;
`;

// HeaderAlert 컴포넌트
export default function HeaderAlert() {
    const { visible, setVisible, childrenBoxRef, triggerRef } = useClickOutside();

    return (
        <div style={{ position: 'relative' }}>
            <AlertIcon
                ref={triggerRef}
                src="/sources/header/bell.svg"
                alt="알림 아이콘"
                onClick={() => setVisible((prev) => !prev)}
            />

            {visible && (
                <Container ref={childrenBoxRef}>
                    {alertList.map((alert) => (
                        <AlertWrapper key={alert.id}>
                            <AlertItem>
                                <AlertImage src={alert.src} alt="알림 이미지" />
                                <AlertText>
                                    <h1>{alert.title}</h1>
                                    <h1>{alert.content}</h1>
                                    <p>{alert.date}</p>
                                </AlertText>
                            </AlertItem>
                            <Divider />
                        </AlertWrapper>
                    ))}
                </Container>
            )}
        </div>
    );
}
