import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import toast from "react-hot-toast";
import InputForm from "../../components/Form";
import UserInput from "../../components/userInput";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
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
        alert("Signup failed");
        throw Error;
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="mt-1 flex h-screen w-full flex-col items-center bg-[#f3f4f6]">
      <div className="mt-10 flex w-1/3 flex-col items-center rounded-md bg-white p-6 shadow-lg">
        <InputForm type="회원가입" onSubmit={handleSignUp}>
          <UserInput
            value={id}
            setValue={setId}
            type="text"
            placeholder="아이디"
          />
          <UserInput
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="비밀번호"
          />
          <UserInput
            value={nickname}
            setValue={setNickname}
            type="text"
            placeholder="닉네임"
          />
        </InputForm>
        <div className="flex flex-row items-center">
          <span className="mx-2 my-3">이미 계정이 있으신가요?</span>
          <Link to="/login" className="text-[#ff5a5f]">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
