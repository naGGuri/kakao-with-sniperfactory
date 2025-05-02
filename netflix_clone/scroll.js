document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-container");

  function updateHeaderTransparency() {
    if (window.scrollY === 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  }

  window.addEventListener("scroll", updateHeaderTransparency);
  updateHeaderTransparency(); // 초기 상태도 체크
});
