import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";
import useUserStore from "../zustand/userStore";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const ResultPage = () => {
  const userId = useUserStore((state) => state.userId);
  const {
    data: results,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isPending) {
    return (
      <div className="mt-1 flex h-screen items-center justify-center bg-bg_color text-3xl">
        <Loader size="100px" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-1 flex h-screen items-center justify-center bg-bg_color text-3xl">
        데이터 조회 중 오류가 발생했습니다.
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-1 flex h-screen w-full flex-col items-center bg-bg_color">
        <div className="mt-10 flex w-full flex-col items-center rounded-md bg-[#ffffff] p-6 shadow-lg sm:w-5/6 md:w-3/5 lg:w-2/5">
          <p className="text-xl text-grey_font">
            저장된 테스트 결과가 없습니다ㅠㅠ
          </p>
          <Link to="/test" className="pinkBtn mt-4">
            테스트 하러 가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-1 flex max-h-max flex-col items-center justify-start bg-bg_color p-5">
      <div className="flex w-2/3 flex-col items-center justify-center rounded-md bg-[#ffffff] p-3 py-8 shadow-lg sm:w-11/12 md:w-4/5 lg:w-2/3">
        <h1 className="my-8 text-4xl font-semibold">모든 테스트 결과</h1>
        {results?.map(
          (result) =>
            (result.visibility || result.userId === userId) && (
              <TestResultItem result={result} key={result.id} />
            ),
        )}
      </div>
    </div>
  );
};

export default ResultPage;
