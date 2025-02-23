import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import useBearsStore from "../zustand/bearsStore";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, changeNickname, setUserId } = useBearsStore(
    (state) => state,
  );

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
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
      <div className="flex flex-row items-center">
        <span className="mx-2 my-3">계정이 없으신가요?</span>
        <Link to="/signup" className="text-pink">
          회원가입
        </Link>
      </div>
    </InputForm>
  );
};

export default Login;
