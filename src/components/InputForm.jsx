/**
 *  입력 폼 컴포넌트 (로그인, 회원가입, 프로필 수정 페이지에서 사용)
 *
 * @param {JSX.Element} props.children
 * @param {string} props.type - 입력하는 페이지 이름 (회원가입, 로그인, 프로필 수정)
 * @param {Function} props.onSubmit - 폼을 저장하는 이벤트 핸들러
 * @returns {JSX.Element}
 */

const InputForm = ({ children, type, onSubmit }) => {
  return (
    <div className="mt-1 flex h-screen w-full flex-col items-center bg-bg_color">
      <div className="mt-10 flex w-full flex-col items-center rounded-md bg-[#ffffff] p-6 shadow-lg sm:w-5/6 md:w-3/5 lg:w-2/5">
        <h2 className="mt-5 text-4xl font-bold">{type}</h2>
        <form
          className="mt-5 flex flex-col items-center gap-5 rounded-md bg-bg_color p-5 shadow-md sm:w-11/12 md:w-4/5 lg:w-4/5"
          onSubmit={onSubmit}
        >
          {children}
          <button className="pinkBtn w-full" type="submit">
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
