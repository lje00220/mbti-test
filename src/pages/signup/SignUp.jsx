const SignUp = () => {
  return (
    <div className="m-10 flex flex-col items-center justify-center bg-slate-400 p-8">
      <h2 className="text-2xl">회원가입</h2>
      <form className="mt-5 flex flex-col items-center gap-5">
        <label className="">
          아이디: <input type="text" />
        </label>
        <label>
          비밀번호: <input type="password" />
        </label>
        <label>
          닉네임: <input type="text" />
        </label>
        <button className="rounded-sm bg-amber-200 p-2" type="submit">
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;
