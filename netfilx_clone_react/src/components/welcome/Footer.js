import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <nav className="footer-nav-container1">
        {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
          <a
            key={platform}
            href="https://www.facebook.com/NetflixKR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/sources/logos/${platform}.png`}
              alt={`${platform} 아이콘`}
              className="footer-icon"
            />
          </a>
        ))}
      </nav>
      <nav className="footer-nav-container2">
        {[
          "화면 해설",
          "고객 센터",
          "기프트카드",
          "미디어 센터",
          "투자 정보(IR)",
          "입사 정보",
          "이용 약관",
          "개인정보",
          "법적 고지",
          "쿠키 설정",
          "회사 정보",
          "문의하기",
        ].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </nav>
      <div className="footer-service-code">서비스 코드</div>
      <div className="footer-nav-container3">
        <p>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)
        </p>
        <p>대표: 레지널드 찬</p>
        <p>이메일 주소: korea@netflix.com</p>
        <p>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </p>
        <p>사업자등록번호: 165-87-00119</p>
        <p>클라우드 호스팅: Amazon Web Services Inc.</p>
      </div>
    </footer>
  );
}
