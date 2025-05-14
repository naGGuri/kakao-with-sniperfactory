export default function Main() {
  return (
    <main className="main-container">
      <img
        src="/sources/welcome/banner.jpg"
        alt="넷플릭스 메인 이미지"
        className="main-image"
      />
      <section className="main-section">
        <p>
          영화, 시리즈 등을
          <br />
          무제한으로
        </p>
        <h2>5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</h2>
        <h3>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </h3>
        <div className="main-input-container">
          <input
            type="email"
            className="main-input"
            placeholder="이메일 주소를 입력하세요"
          />
          <div className="main-button">시작하기</div>
        </div>
      </section>
    </main>
  );
}
