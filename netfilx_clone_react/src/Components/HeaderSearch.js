import useSearchToggle from "../Hooks/useSearchToggle";

export default function HeaderSearch() {
  const { visible, setVisible, searchBoxRef, triggerRef, inputRef } =
    useSearchToggle();

  return (
    <div className="search-toggle">
      {/* 검색 아이콘 (닫힘 상태) */}
      <img
        ref={triggerRef} // 검색 아이콘을 클릭할 때 검색창을 열기 위한 ref
        src="/sources/header/search.svg"
        alt="검색 아이콘"
        className={`header-icon search-trigger ${visible ? "hidden" : ""}`}
        onClick={() => setVisible(true)} // 검색 아이콘 클릭 시 검색창 열기
      />

      {/* 검색창 (열림 상태) */}
      <div
        ref={searchBoxRef} // 검색창을 클릭할 때 검색창을 닫기 위한 ref
        className={`search-box ${visible ? "" : "hidden"}`}
      >
        <img
          src="/sources/header/search.svg"
          className="header-icon"
          alt="검색"
        />
        <input
          ref={inputRef} // 검색창이 열릴 때 포커스를 주기 위한 ref
          type="text"
          placeholder="제목, 장르 등을 검색하세요"
          className="search-input"
        />
      </div>
    </div>
  );
}
