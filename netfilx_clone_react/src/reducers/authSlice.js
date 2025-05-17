// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// localStorage에서 저장된 사용자 정보 불러오기
const savedUser = localStorage.getItem('user');

// 초기 상태: 로그인 여부와 사용자 정보
const initialState = savedUser ? { isLoggedIn: true, user: JSON.parse(savedUser) } : { isLoggedIn: false, user: null };

// auth 관련 slice 정의
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // 로그인: 사용자 정보 설정 + 로그인 상태 true + localStorage 저장
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },

        // 로그아웃: 상태 초기화 + localStorage 제거
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem('user');
        },

        // 이메일만 저장: 로그인 전 EmailInput에서 입력값 저장용
        setEmail: (state, action) => {
            state.user = { email: action.payload };
        },
    },
});

export const { login, logout, setEmail } = authSlice.actions;
export default authSlice.reducer;
