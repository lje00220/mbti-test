import { Link } from "react-router-dom";
import Box from "../../components/Box";

const Home = () => {
  return (
    <div className="mt-1 flex h-screen flex-col items-center justify-center bg-[#f3f4f6] p-5">
      <h1 className="mb-5 mt-2 text-5xl font-bold text-[#484848]">
        무료 성격 테스트
      </h1>
      <p className="my-5 text-lg text-[#484848]">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="mb-8 flex flex-row gap-5">
        <Box>
          <h4 className="mb-3 text-xl text-[#484848]">성격 유형 검사</h4>
          <p className="text-[#4b5563]">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </Box>
        <Box>
          <h4 className="mb-3 text-xl text-[#484848]">성격 유형 이해</h4>
          <p className="text-[#4b5563]">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </Box>
        <Box>
          <h4 className="mb-3 text-xl text-[#484848]">팀 평가</h4>
          <p className="text-[#4b5563]">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </Box>
      </div>
      <Link
        to="/test"
        className="rounded-2xl bg-[#ff5a5f] px-5 py-2 text-white"
      >
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;
