import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_MY_DB_SERVER,
});

export const getTestResults = async () => {
  const response = await api.get("/");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await api.post("/", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (data) => {
  const { id, visibility } = data;
  const response = await api.patch(`/${id}`, { visibility });
  return response.data;
};
