import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { instructions } from "../data/instruction";
import InstructionBox from "../components/InstructionBox";
import useUserStore from "../zustand/userStore";

const Home = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const navigate = useNavigate();

  const handleMovePage = () => {
    if (accessToken) {
      navigate("/test");
    } else {
      toast.error(`로그인이 필요합니다! 
        로그인 페이지로 이동합니다.`);
      setTimeout(() => navigate("/login"), 500);
    }
  };

  return (
    <div className="mt-1 flex flex-col items-center justify-start bg-bg_color p-5 sm:max-h-max md:max-h-max lg:h-screen">
      <h1 className="mb-5 mt-5 text-5xl font-bold text-black">
        무료 성격 테스트
      </h1>
      <p className="my-5 text-lg text-black">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="mb-8 flex flex-col gap-5 overflow-hidden sm:flex-col md:flex-col lg:flex-row">
        {instructions.map((instruction) => (
          <InstructionBox key={instruction.id} {...instruction} />
        ))}
      </div>
      <button onClick={handleMovePage} className="pinkBtn">
        내 성격 알아보러 가기
      </button>
    </div>
  );
};

export default Home;
