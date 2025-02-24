import { useState } from "react";
import { Link } from "react-router-dom";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import KakaoShare from "../components/KakaoShare";
import useUserStore from "../zustand/userStore";

/**
 * 테스트 페이지
 *  - mbti 검사 질문지와 자신의 테스트 결과를 출력하는 페이지
 *
 * @returns {JSX.Element}
 */

const TestPage = () => {
  const [result, setResult] = useState(null);
  const nickname = useUserStore((state) => state.nickname);
  const userId = useUserStore((state) => state.userId);
  const queryClient = useQueryClient();

  // 테스트 제출 시 mbti 계산 후 서버로 결과 전송
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
      <div className="my-5 w-11/12 overflow-scroll rounded-lg bg-[#ffffff] p-3 sm:w-11/12 md:w-3/5 lg:w-2/5">
        {!result ? (
          <>
            <h1 className="my-6 ml-5 text-3xl font-bold text-slate">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <div className="p-4">
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
