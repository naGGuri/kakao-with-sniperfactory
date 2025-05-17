// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// localStorage에서 저장된 사용자 정보 불러오기
const savedUser = localStorage.getItem('user');

// 초기 상태: localStorage에 유저 정보가 있으면 로그인된 상태로 시작
const initialState = savedUser ? { isLoggedIn: true, user: JSON.parse(savedUser) } : { isLoggedIn: false, user: null };

// auth 관련 slice 생성
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // 로그인 액션: Redux 상태 변경 + localStorage 저장
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },

        // 로그아웃 액션: Redux 상태 초기화 + localStorage 제거
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

// 액션과 리듀서 내보내기
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
