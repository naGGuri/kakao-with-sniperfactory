document.addEventListener("DOMContentLoaded", () => {
  const searchTrigger = document.querySelector(".search-trigger");
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");

  const openSearch = () => {
    searchTrigger.classList.add("hidden");
    searchBox.classList.remove("hidden");
    searchInput.focus();
  };

  const closeSearch = () => {
    searchBox.classList.add("hidden");
    searchTrigger.classList.remove("hidden");
    searchInput.value = "";
  };

  // 열기
  searchTrigger.addEventListener("click", openSearch);

  // ESC 키로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !searchBox.classList.contains("hidden")) {
      closeSearch();
    }
  });

  // 검색창 바깥 클릭 시 닫기
  document.addEventListener("click", (e) => {
    if (
      !searchBox.classList.contains("hidden") &&
      !searchBox.contains(e.target) &&
      !searchTrigger.contains(e.target)
    ) {
      closeSearch();
    }
  });
});
