import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import toast from "react-hot-toast";
import useBearsStore from "../../zustand/bearsStore";

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
    <div className="m-10 flex flex-col items-center justify-center bg-slate-400 p-8">
      <h2 className="text-2xl">로그인</h2>
      <form
        className="mt-5 flex flex-col items-center gap-5"
        onSubmit={handleLogin}
      >
        <label>
          아이디:
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
        <button className="rounded-sm bg-amber-200 p-2" type="submit">
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default Login;
