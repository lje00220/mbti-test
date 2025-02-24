import { useState } from "react";
import { questions } from "../data/question";
import toast from "react-hot-toast";

/**
 * 테스트 폼 컴포넌트
 *  - 20개의 질문과 보기를 출력
 *
 * @param {Function} props.onSubmit - 테스트 폼을 저장하는 함수
 * @returns {JSX.Element}
 */

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );

  // 테스트에서 라디오 버튼 체크 시 답안을 저장하는 이벤트 핸들러
  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  // 테스트 폼을 저장하는 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // 만약, 테스트 문항을 전부 체크하지 않으면 경고창
    for (let answer of answers) {
      if (!answer.type) {
        toast.error("체크되지 않은 항목이 있습니다!");
        return;
      }
    }
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 rounded-lg bg-[#ffffff] p-2 md:p-6 lg:p-6"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="mb-3 text-lg font-semibold">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => {
              return (
                <label
                  key={i}
                  className={`block cursor-pointer rounded-lg border p-3 transition-colors duration-300 ${
                    answers[index]?.answer === option ? "bg-[#ffffff]" : ""
                  } hover:border-[#F9A8D4] hover:bg-[#FCE7F3]`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index]?.answer === option}
                    onChange={() => handleChange(index, option)}
                    className="mr-2 text-black"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>
      ))}
      <button type="submit" className="pinkBtn w-full">
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
