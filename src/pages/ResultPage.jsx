import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import useBearsStore from "../zustand/bearsStore";
import TestResultItem from "../components/TestResultItem";

const ResultPage = () => {
  const { userId } = useBearsStore((state) => state);
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
        로딩중입니다...
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

  return (
    <div className="mt-1 flex max-h-max flex-col items-center justify-start bg-bg_color p-5">
      <div className="flex w-2/3 flex-col items-center justify-center rounded-md bg-[#ffffff] py-8">
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
