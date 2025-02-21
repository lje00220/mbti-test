import { useQuery } from "@tanstack/react-query";

const ResultPage = () => {
  const {
    data: results,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: fetchTodos,
  });

  return (
    <div className="mt-1 flex h-screen flex-col items-center justify-start bg-[#f3f4f6] p-5">
      <div className="flex flex-col items-center justify-center bg-white">
        <h1>모든 테스트 결과</h1>
      </div>
    </div>
  );
};

export default ResultPage;
