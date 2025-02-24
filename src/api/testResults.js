import axios from "axios";

/**
 * 테스트와 관련된 axios 함수
 */

const api = axios.create({
  baseURL: import.meta.env.VITE_MY_DB_SERVER,
});

// 테스트 결과 목록을 받아오는 함수
export const getTestResults = async () => {
  const response = await api.get("/");
  return response.data;
};

// 테스트 결과를 서버에 전송하는 함수
export const createTestResult = async (resultData) => {
  const response = await api.post("/", resultData);
  return response.data;
};

// 테스트 결과를 서버에서 삭제하는 함수
export const deleteTestResult = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

// 테스트 결과의 공개 여부를 업데이트 하는 함수
export const updateTestResultVisibility = async (data) => {
  const { id, visibility } = data;
  const response = await api.patch(`/${id}`, { visibility });
  return response.data;
};
