import instance from "./axios";

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  return response.data;
};

// export const getUserProfile = async (token) => {

// };

// export const updateProfile = async (formData) => {

// };
