import React from "react";
import "../../styles/HeaderAlertBox.css";

const alertList = [
  {
    id: 1,
    title: "5월 13일 공개",
    content: "지금 예고편을 시청하세요",
    date: "1일",
    src: "/sources/header/alert_box/1.png",
  },
  {
    id: 2,
    title: "SBS, 드디어 넷플에 상륙",
    content: "드라마와 예능을 모두 만나보세요",
    date: "1주 전",
    src: "/sources/header/alert_box/2.png",
  },
  {
    id: 3,
    title: "신규 콘텐츠",
    content: "천국보다 아름다운",
    date: "2주 전",
    src: "/sources/header/alert_box/3.png",
  },
  {
    id: 4,
    title: "신규 콘텐츠",
    content: "귀궁",
    date: "3주 전",
    src: "/sources/header/alert_box/4.png",
  },
  {
    id: 5,
    title: "신규 콘텐츠",
    content: "정글밥2 - 카리브밥",
    date: "3주 전",
    src: "/sources/header/alert_box/5.png",
  },
];

export default function HeaderAlert() {
  return (
    <div className="alert-box-container">
      {alertList.map((alert) => (
        <div key={alert.id} className="alert-wrapper">
          <div className="alert-item">
            <img src={alert.src} alt="알림 이미지" />
            <div className="alert-text">
              <h1>{alert.title}</h1>
              <h1>{alert.content}</h1>
              <p>{alert.date}</p>
            </div>
          </div>
          <div className="alert-box-divider" />
        </div>
      ))}
    </div>
  );
}
