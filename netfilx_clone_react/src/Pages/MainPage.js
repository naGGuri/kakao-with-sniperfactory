import Header from "../components/header/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/main/Banner";
import VideoList from "../components/main/VideoList";

export default function MainPage() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 배너 */}
      <Banner />
      {/* 섹션 1 ~ 4 */}
      <VideoList sectionName="section1" />
      <VideoList sectionName="section2" />
      <VideoList sectionName="section3" />
      <VideoList sectionName="section4" />
      {/* 푸터 */}
      <Footer />
    </>
  );
}
