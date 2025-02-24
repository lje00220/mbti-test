import { useState } from "react";
import { questions } from "../data/question";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
