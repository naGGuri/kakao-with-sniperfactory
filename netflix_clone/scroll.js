document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-container"); // 헤더 컨테이너 클래스 선택

  const updateHeaderTransparency = () => {
    // 스크롤 위치가 0일 때
    if (window.scrollY === 0) {
      header.classList.add("transparent"); // 헤더를 투명하게
    } else {
      header.classList.remove("transparent");
    }
  };

  window.addEventListener("scroll", updateHeaderTransparency);
  updateHeaderTransparency(); // 초기 상태도 체크
});
