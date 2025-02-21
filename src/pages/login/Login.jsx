import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import toast from "react-hot-toast";
import useBearsStore from "../../zustand/bearsStore";
import InputForm from "../../components/InputForm";
import UserInput from "../../components/userInput";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin } = useBearsStore((state) => state);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
        id,
        password,
      });
      console.log(data);

      if (data.success) {
        toast.success("로그인 되었습니다!");
        isLogin(data.accessToken);
        navigate("/");
      } else {
        alert("로그인 실패");
        throw Error;
      }
    } catch (error) {
      console.error("Login error: ", error);
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
        <Link to="/signup" className="text-[#ff5a5f]">
          회원가입
        </Link>
      </div>
    </InputForm>
  );
};

export default Login;
