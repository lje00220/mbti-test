import instance from "./axios";

export const register = async (userData) => {
  const response = await instance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await instance.post("/login", userData);
  return response.data;
};

export const updateProfile = async (formData, header) => {
  const response = await instance.patch("/profile", formData, header);
  return response.data;
};
