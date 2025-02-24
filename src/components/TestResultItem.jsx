import toast from "react-hot-toast";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useBearsStore from "../zustand/bearsStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TestResultItem = ({ result }) => {
  const { userId } = useBearsStore((state) => state);
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      toast.success("테스트 결과를 삭제했습니다!");
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

  return (
    <div className="mb-5 w-2/3 rounded-md bg-slate p-5">
      <div className="flex flex-row justify-between border-b-2 pb-2">
        <p className="text-xl text-white">{result.nickname}</p>
        <p className="text-grey_font">{result.date}</p>
      </div>
      <p className="text-bold my-2 text-2xl text-yellow">{result.result}</p>
      <p className="text-grey_font">{mbtiDescriptions[result.result]}</p>
      {userId === result.userId && (
        <div className="my-2 flex justify-end gap-3">
          <button
            onClick={() => handleChangeVisibility(result.id, result.visibility)}
            className="rounded-md bg-blue px-3 py-2 text-white"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={() => handleDelete(result.id)}
            className="rounded-md bg-red px-3 py-2 text-white"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
