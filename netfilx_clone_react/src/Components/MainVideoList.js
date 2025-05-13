import MainVideoItem from "./MainVideoItem";
import "../Styles/MainVideoList.css";

export default function MainVideoList({ sectionName }) {
  // section 이름 별로 비디오 리스트 생성
  const videoImages = Array.from({ length: 10 }, (_, i) => ({
    src: `sources/${sectionName}/${i + 1}.jpg`,
  }));

  const videoListTitles = {
    section1: "평단의 찬사를 받은 드라마",
    section2: "넷플릭스에 새로 올라온 콘텐츠",
    section3: "몰아보기 추천 시리즈",
    section4: "한국 예능",
  };

  return (
    <>
      <p className="video-list-title">{videoListTitles[sectionName]}</p>

      <div className="video-list-container">
        {videoImages.map((item, index) => (
          <MainVideoItem key={index} src={item.src} />
        ))}
      </div>
    </>
  );
}
