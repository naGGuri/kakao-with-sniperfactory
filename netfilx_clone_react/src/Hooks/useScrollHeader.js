// src/hooks/useScrollHeader.js
import { useEffect, useState } from 'react';

export default function useScrollHeader() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 상태 확인

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isTop;
}
