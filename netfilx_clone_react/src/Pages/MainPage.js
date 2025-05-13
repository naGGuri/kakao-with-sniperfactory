import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainBanner from "../Components/MainBanner";
import MainVideoList from "../Components/MainVideoList";

export default function MainPage() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 배너 */}
      <MainBanner />
      {/* 섹션 1 ~ 4 */}
      <MainVideoList sectionName="section1" />
      <MainVideoList sectionName="section2" />
      <MainVideoList sectionName="section3" />
      <MainVideoList sectionName="section4" />
      {/* 푸터 */}
      <Footer />
    </>
  );
}
