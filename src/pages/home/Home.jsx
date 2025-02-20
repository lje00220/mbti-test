import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="mb-5 text-4xl">무료 성격 테스트</h1>
      <Link to="/test" className="rounded-2xl bg-slate-500 p-2">
        테스트하기
      </Link>
    </div>
  );
};

export default Home;
