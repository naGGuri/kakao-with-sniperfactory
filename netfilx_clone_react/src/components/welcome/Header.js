import React from "react";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-wrapper1">
        <img
          src="/sources/netfilxLogo.svg"
          alt="넷플릭스 로고"
          className="header-logo"
        />
      </div>
      <div className="header-wrapper2">
        <select className="header-dropdown">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
        <div className="btn-login">로그인</div>
      </div>
    </header>
  );
}
