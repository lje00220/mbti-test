import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "../zustand/userStore";

/**
 * 로그인 페이지
 *  - 로그인 기능
 *  - 회원이 아닐 시 회원가입 페이지로 이동 가능
 *
 * @returns {JSX.Element}
 */

const Login = () => {
  const isLogin = useUserStore((state) => state.isLogin);
  const changeNickname = useUserStore((state) => state.changeNickname);
  const setUserId = useUserStore((state) => state.setUserId);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  // id와 password를 변경하는 이벤트 핸들러
  const handleChange = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const { mutateAsync } = useMutation({
    mutationFn: login,
  });

  // 로그인 버튼 클릭 시 실행
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync(user);

      if (data.success) {
        toast.success("로그인 되었습니다!");
        isLogin(data.accessToken);
        changeNickname(data.nickname);
        setUserId(data.userId);

        navigate("/");
      }
    } catch (error) {
      toast.error("입력한 아이디가 존재하지 않거나 비밀번호가 잘못되었습니다.");
      console.error(error.message);
    }
    setUser({ id: "", password: "" });
  };

  return (
    <InputForm type="로그인" onSubmit={handleLogin}>
      <UserInput
        value={user.id}
        onChange={(value) => handleChange("id", value)}
        placeholder="아이디"
      />
      <UserInput
        value={user.password}
        onChange={(value) => handleChange("password", value)}
        type="password"
        placeholder="비밀번호"
      />
      <div className="flex items-center sm:flex-col md:flex-row lg:flex-row">
        <span className="mx-2 my-3">계정이 없으신가요?</span>
        <Link to="/signup" className="text-pink">
          회원가입
        </Link>
      </div>
    </InputForm>
  );
};

export default Login;
