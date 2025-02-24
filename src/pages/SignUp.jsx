import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import toast from "react-hot-toast";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";
import { useMutation } from "@tanstack/react-query";

/**
 * 회원가입 페이지
 *  - 간단한 유효성 검사를 거친 후 회원가입
 *  - 회원가입 후 로그인 페이지로 자동 이동
 *
 * @returns {JSX.Element}
 */

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const { mutateAsync } = useMutation({
    mutationFn: register,
  });

  // id와 password, nickname의 Input을 받아오는 이벤트 핸들러
  const handleChange = (key, value) => {
    setUserInfo((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  const handleSignUp = async (e) => {
    e.preventDefault();

    // 아이디는 6자 이상이어야 한다.
    if (userInfo.id.trim().length < 6) {
      toast.error("아이디를 6자 이상 입력해주세요.");
      return;
    }

    // 비밀번호는 8자 이상이어야 한다.
    if (userInfo.password.trim().length < 8) {
      toast.error("비밀번호를 8자 이상 입력해주세요.");
      return;
    }

    // 닉네임은 1자 이상이어야 한다.
    if (userInfo.nickname.trim() === "") {
      toast.error("닉네임을 1자 이상 입력해주세요.");
      return;
    }

    try {
      const data = await mutateAsync(userInfo);

      if (data.success) {
        toast.success("회원가입이 완료되었습니다! 로그인해주세요.");
        navigate("/login");
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response.data.message); // 회원가입 실패 시 화면에 에러 메세지 출력
    }
    setUserInfo({ id: "", password: "", nickname: "" });
  };

  return (
    <InputForm type="회원가입" onSubmit={handleSignUp}>
      <UserInput
        value={userInfo.id}
        onChange={(value) => handleChange("id", value)}
        placeholder="아이디"
      />
      <UserInput
        value={userInfo.password}
        onChange={(value) => handleChange("password", value)}
        type="password"
        placeholder="비밀번호"
      />
      <UserInput
        value={userInfo.nickname}
        onChange={(value) => handleChange("nickname", value)}
        placeholder="닉네임"
      />
      <div className="flex items-center sm:flex-col md:flex-row lg:flex-row">
        <span className="mx-2 my-3">이미 계정이 있으신가요?</span>
        <Link to="/login" className="text-pink">
          로그인
        </Link>
      </div>
    </InputForm>
  );
};

export default SignUp;
