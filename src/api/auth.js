import axios from "axios";
import useUserStore from "../zustand/userStore";

/**
 * 로그인, 회원가입, 회원 정보 수정과 같은
 * 인증, 인가와 관련한 axios 함수
 */

const instance = axios.create({
  baseURL: import.meta.env.VITE_NBC_SERVER,
});

instance.interceptors.request.use((config) => {
  const token = useUserStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 회원가입
export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  return response.data;
};

// 닉네임 수정
export const updateProfile = async (formData) => {
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
