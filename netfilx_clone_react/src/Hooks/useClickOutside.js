// src/hooks/useClickOutside.js

import { useEffect, useRef, useState } from 'react';

export default function useClickOutside() {
    const [visible, setVisible] = useState(false); // 검색창의 열림/닫힘 상태
    const childrenBoxRef = useRef(null); // 자식 DOM 요소를 참조하기 위한 ref
    const triggerRef = useRef(null); // 자식 아이콘 DOM 요소를 참조하기 위한 ref
    // const inputRef = useRef(null); // 검색 입력창 DOM 요소를 참조하기 위한 ref

    useEffect(() => {
        // 키보드 이벤트 리스너 등록
        // 검색창이 열려있을 때만 Escape 키로 닫기
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setVisible(false);
            }
        };
        // 클릭 이벤트 리스너 등록
        // 검색창이 열려있고, 클릭한 요소가 검색창이나 검색 아이콘이 아닐 때 닫기
        const handleClickOutside = (e) => {
            if (visible && !childrenBoxRef.current?.contains(e.target) && !triggerRef.current?.contains(e.target)) {
                setVisible(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown); // 키보드 이벤트 리스너 등록
        document.addEventListener('click', handleClickOutside); // 클릭 이벤트 리스너 등록

        return () => {
            document.removeEventListener('keydown', handleKeyDown); // 키보드 이벤트 리스너 해제
            document.removeEventListener('click', handleClickOutside); // 클릭 이벤트 리스너 해제
        };
    }, [visible]);

    return {
        visible,
        setVisible,
        childrenBoxRef,
        triggerRef,
        // inputRef,
    };
}
