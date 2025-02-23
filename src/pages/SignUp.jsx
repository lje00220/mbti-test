import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import toast from "react-hot-toast";
import InputForm from "../components/InputForm";
import UserInput from "../components/UserInput";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (id.trim().length < 6) {
      toast.error("아이디를 6자 이상 입력해주세요.");
      return;
    }

    if (password.trim().length < 6) {
      toast.error("비밀번호를 8자 이상 입력해주세요.");
      return;
    }

    if (nickname.trim() === "") {
      toast.error("닉네임을 1자 이상 입력해주세요.");
      return;
    }

    try {
      const data = await register({
        id,
        password,
        nickname,
      });

      if (data.success) {
        toast.success("회원가입이 완료되었습니다! 로그인해주세요.");
        navigate("/login");
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("회원가입에 실패했습니다.");
    }
  };

  return (
    <InputForm type="회원가입" onSubmit={handleSignUp}>
      <UserInput value={id} setValue={setId} placeholder="아이디" />
      <UserInput
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="비밀번호"
      />
      <UserInput value={nickname} setValue={setNickname} placeholder="닉네임" />
      <div className="flex flex-row items-center">
        <span className="mx-2 my-3">이미 계정이 있으신가요?</span>
        <Link to="/login" className="text-pink">
          로그인
        </Link>
      </div>
    </InputForm>
  );
};

export default SignUp;
