import { useState } from "react";
import { Link } from "react-router-dom";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import KakaoShare from "../components/KakaoShare";
import useUserStore from "../zustand/userStore";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const nickname = useUserStore((state) => state.nickname);
  const userId = useUserStore((state) => state.userId);
  const queryClient = useQueryClient();

  const handleTestSubmit = (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    const newObj = {
      nickname: nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleDateString("ko-KR"),
      userId: userId,
    };

    mutate(newObj);
  };

  const { mutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      toast.success("테스트 결과가 저장되었습니다!");
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return (
    <div className="mt-1 flex h-screen w-full flex-col items-center justify-center bg-[#f3f4f6]">
      <div className="my-5 w-full max-w-lg overflow-scroll rounded-lg bg-[#ffffff] p-8">
        {!result ? (
          <>
            <h1 className="mb-6 text-3xl font-bold text-slate">MBTI 테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <div className="">
            <h1 className="mb-6 text-3xl font-bold text-slate">
              테스트 결과: {result}
            </h1>
            <p className="mb-6 text-lg text-black">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <Link to="/result" className="pinkBtn flex justify-center">
              결과 페이지로 이동하기
            </Link>
            <KakaoShare />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
