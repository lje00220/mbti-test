import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_NBC_SERVER,
});

instance.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  },
);

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  return response.data;
};

export const updateProfile = async ([formData, header]) => {
  const response = await instance.patch("/profile", formData, header);
  return response.data;
};
