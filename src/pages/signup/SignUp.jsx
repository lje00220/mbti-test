import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

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
    <div className="m-10 flex flex-col items-center justify-center bg-slate-400 p-8">
      <h2 className="text-2xl">회원가입</h2>
      <form
        className="mt-5 flex flex-col items-center gap-5"
        onSubmit={handleSignUp}
      >
        <label className="">
          아이디:{" "}
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          닉네임:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <button className="rounded-sm bg-amber-200 p-2" type="submit">
          회원가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;
