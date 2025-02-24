import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "../zustand/userStore";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useUserStore((state) => state.isLogin);
  const changeNickname = useUserStore((state) => state.changeNickname);
  const setUserId = useUserStore((state) => state.setUserId);

  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: login,
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({
        id,
        password,
      });

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
  };

  return (
    <InputForm type="로그인" onSubmit={handleLogin}>
      <UserInput value={id} setValue={setId} placeholder="아이디" />
      <UserInput
        value={password}
        setValue={setPassword}
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
