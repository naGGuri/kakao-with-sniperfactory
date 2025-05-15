import React from "react";
import "../../styles/MainVideoItem.css";

export default function VideoItem({ src }) {
  return (
    <>
      <div className="video-container fade-out">
        <div className="video-wrapper">
          {/* 비디오 썸네일 */}
          <img className="video-image" src={src} alt="비디오 썸네일" />
          {/* 비디오 설명 */}
          {/* 호버시 보이는 비디오 상세 내용(디테일) */}
          <div className="video-desc">
            {/* 아이콘 영역 */}
            <div className="video-icons-wrapper">
              {/* 왼쪽 아이콘들 */}
              <div className="video-left-icons">
                <img
                  className="video-icon"
                  src="/sources/main/video/play.png"
                  alt="재생 아이콘"
                />
                <img
                  className="video-icon"
                  src="/sources/main/video/add.png"
                  alt="찜 아이콘"
                />
                <img
                  className="video-icon"
                  src="/sources/main/video/like.png"
                  alt="좋아요 아이콘"
                />
              </div>
              {/* 오른쪽 아이콘들 */}
              <div className="video-right-icons">
                <img
                  className="video-icon"
                  src="/sources/main/video/arrow_down_circle.png"
                  alt="회차정보"
                />
              </div>
            </div>
            {/* 나이제한, 총 비디도 수 등 상세설명 */}
            <p>비디오 설명 영역입니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
