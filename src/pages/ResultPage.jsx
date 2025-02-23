import { useQuery } from "@tanstack/react-query";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useBearsStore from "../zustand/bearsStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ResultPage = () => {
  const { userId } = useBearsStore((state) => state);
  const queryClient = useQueryClient();
  const {
    data: results,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      toast.success("삭제했습니다!");
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const { mutate: changeMutate } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      toast.success("공개 여부를 변경했습니다!");
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  const handleChangeVisibility = (id, visibility) => {
    const data = {
      id: id,
      visibility: !visibility,
    };
    changeMutate(data);
  };

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="mt-1 flex flex-col items-center justify-start bg-[#f3f4f6] p-5">
      <div className="flex w-2/3 flex-col items-center justify-center rounded-md bg-white">
        <h1 className="my-8 text-4xl font-semibold">모든 테스트 결과</h1>
        {results
          ? results.map(
              (result) =>
                (result.visibility || result.userId === userId) && (
                  <div
                    key={result.id}
                    className="bg-slate mb-5 w-2/3 rounded-md p-5"
                  >
                    <div className="flex flex-row justify-between border-b-2 pb-2">
                      <p className="text-xl text-white">{result.nickname}</p>
                      <p className="text-grey_font">{result.date}</p>
                    </div>
                    <p className="text-bold text-yellow my-2 text-2xl">
                      {result.result}
                    </p>
                    <p className="text-grey_font">
                      {mbtiDescriptions[result.result]}
                    </p>
                    {userId === result.userId && (
                      <div className="my-2 flex justify-end gap-3">
                        <button
                          onClick={() =>
                            handleChangeVisibility(result.id, result.visibility)
                          }
                          className="bg-blue rounded-md px-3 py-2 text-white"
                        >
                          {result.visibility ? "비공개로 전환" : "공개로 전환"}
                        </button>
                        <button
                          onClick={() => handleDelete(result.id)}
                          className="bg-red rounded-md px-3 py-2 text-white"
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                ),
            )
          : ""}
      </div>
    </div>
  );
};

export default ResultPage;
