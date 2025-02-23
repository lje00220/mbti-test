import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-13-125-245-21.ap-northeast-2.compute.amazonaws.com:4000",
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

instance.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답 받았어요!");
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  },
);

export default instance;
