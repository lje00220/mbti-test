import { useState } from "react";
// import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import TestForm from "../../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../../utils/mbtiCalculator";

//user 프롭스로 받기
const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = (answers) => {
    const mbtiResult = calculateMBTI(answers);
    console.log("mbtiResult", mbtiResult);
    setResult(mbtiResult);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

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
            <button
              onClick={handleNavigateToResults}
              className="bg-primary-color hover:bg-primary-dark w-full rounded-lg py-3 font-semibold text-white transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
