export default function MainBanner() {
  return (
    <section className="banner-container">
      <img className="banner-image" src="/sources/banner.webp" alt="배너" />
      <div className="banner-detail">
        <img
          className="banner-logo"
          src="/sources/banner2.webp"
          alt="배너 로고"
        />
        <p className="banner-coment">
          무도회에서 우승한 뒤, 결혼을 하고 아들도 얻은 오공은 행복한 나날을
          보내고 있었다. 하지만 지구를 약탈하기 위해 속속 침략해 오는 우주인들에
          맞서
          <br />
          싸워야 할 시간이 찾아온다.
        </p>
        <div className="banner-button-container">
          <div className="banner-button1">재생</div>
          <div className="banner-button2">상세 정보</div>
        </div>
      </div>
    </section>
  );
}
