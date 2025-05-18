// src/components/layout/Footer.js
import React from 'react';
import styled from 'styled-components';

// Footer 전체 컨테이너
const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: gray;
    margin: 80px 300px 0px 300px;
`;

// SNS 아이콘 링크 컨테이너
const SocialLinks = styled.nav`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    list-style: none;
    width: 180px;
    margin-bottom: 20px;
`;

// 각 SNS 아이콘 이미지
const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

// 첫 번째 네비게이션 메뉴 (링크 목록)
const LinkGrid = styled.nav`
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    list-style: none;
`;

const LinkItem = styled.p`
    width: 25%;
    padding-bottom: 16px;
`;

// 서비스 코드 버튼
const ServiceCode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    width: 74px;
    height: 34px;
    color: gray;
    margin: 10px 0;
    border: 1px solid gray;
`;

// 회사 정보 텍스트 블록
const CompanyInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 11px;

    p {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

// Footer 컴포넌트 정의
export default function Footer() {
    return (
        <FooterContainer>
            {/* SNS 링크 */}
            <SocialLinks>
                <a href="https://www.facebook.com/NetflixKR" target="_blank" rel="noopener noreferrer">
                    <Icon src="/sources/logos/facebook.png" alt="페이스북 아이콘" />
                </a>
                <a href="https://www.facebook.com/NetflixKR" target="_blank" rel="noopener noreferrer">
                    <Icon src="/sources/logos/instagram.png" alt="인스타그램 아이콘" />
                </a>
                <a href="https://www.facebook.com/NetflixKR" target="_blank" rel="noopener noreferrer">
                    <Icon src="/sources/logos/twitter.png" alt="트위터 아이콘" />
                </a>
                <a href="https://www.facebook.com/NetflixKR" target="_blank" rel="noopener noreferrer">
                    <Icon src="/sources/logos/youtube.png" alt="유튜브 아이콘" />
                </a>
            </SocialLinks>

            {/* 하단 링크 목록 */}
            <LinkGrid>
                {[
                    '화면 해설',
                    '고객 센터',
                    '기프트카드',
                    '미디어 센터',
                    '투자 정보(IR)',
                    '입사 정보',
                    '이용 약관',
                    '개인정보',
                    '법적 고지',
                    '쿠키 설정',
                    '회사 정보',
                    '문의하기',
                ].map((text, i) => (
                    <LinkItem key={i}>{text}</LinkItem>
                ))}
            </LinkGrid>

            {/* 서비스 코드 버튼 */}
            <ServiceCode>서비스 코드</ServiceCode>

            {/* 회사 정보 텍스트 */}
            <CompanyInfo>
                <p>
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161
                    (수신자 부담)
                </p>
                <p>대표: 레지널드 찬</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
            </CompanyInfo>
        </FooterContainer>
    );
}
