import { useState } from "react";
import useScrollHeader from "../../hooks/useScrollHeader";
import Search from "./Search";
import Alert from "./Alert";

export default function Header() {
  const isTop = useScrollHeader(); // 스크롤 위치에 따라 헤더의 배경색을 변경하기 위한 커스텀 훅
  const [showAlertBox, setShowAlertBox] = useState(false); // 알림 박스의 표시 여부를 관리하는 상태

  const handleAlertClick = () => {
    setShowAlertBox((prev) => !prev); // 알림 박스의 표시 여부를 토글
  };

  return (
    <>
      <header className={`header-container ${isTop ? "transparent" : ""}`}>
        {/* 헤더 왼쪽 컨테이너 */}
        <nav className="header-nav-container1">
          <a href="" target="_self" rel="noopener noreferrer">
            <img
              src="/sources/header/netfilxLogo.svg"
              alt="넷플릭스 로고"
              className="header-logo"
            />
          </a>
          <p>홈</p>
          <p>시리즈</p>
          <p>영화</p>
          <p>게임</p>
          <p>NEW! 요즘 대세 콘텐츠</p>
          <p>내가 찜한 리스트</p>
          <p>언어별로 찾아보기</p>
        </nav>

        {/* 헤더 오른쪽 컨테이너 */}
        <nav className="header-nav-container2">
          <Search />
          <img
            src="/sources/header/bell.svg"
            alt="알림 아이콘"
            className="header-icon"
            onClick={handleAlertClick} // 알림 아이콘 클릭 시 알림 박스 표시
          />
          {showAlertBox && <Alert />}
          <div className="user-wrapper">
            <img
              src="/sources/header/user.svg"
              alt="사용자 아이콘"
              className="header-icon"
            />
            <img
              src="/sources/header/arrow_drop_down.svg"
              alt="드롭다운 아이콘"
              className="header-icon"
            />
          </div>
        </nav>
      </header>

      {/* 알림 박스 */}
    </>
  );
}
