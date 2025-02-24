import axios from "axios";
import useUserStore from "../zustand/userStore";

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

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await instance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
