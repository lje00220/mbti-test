import { useState } from "react";
import { Link } from "react-router-dom";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import useBearsStore from "../zustand/bearsStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import KakaoShare from "../components/KakaoShare";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const { nickname, userId } = useBearsStore((state) => state);
  const queryClient = useQueryClient();

  const handleTestSubmit = (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    const newObj = {
      nickname: nickname,
      result: mbtiResult,
      visibility: true,
      date: Date.now(),
      userId: userId,
    };

    mutate(newObj);
  };

  const { mutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      toast.success("데이터 삽입 성공");
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return (
    <div className="mt-1 flex w-full flex-col items-center justify-center bg-[#f3f4f6]">
      <div className="my-5 h-2/5 w-full max-w-lg overflow-hidden rounded-lg bg-white p-8">
        {!result ? (
          <>
            <h1 className="text-primary-color mb-6 text-3xl font-bold">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-primary-color mb-6 text-3xl font-bold">
              테스트 결과: {result}
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <Link to="/result" className="pinkBtn flex justify-center">
              결과 페이지로 이동하기
            </Link>
            <KakaoShare></KakaoShare>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
