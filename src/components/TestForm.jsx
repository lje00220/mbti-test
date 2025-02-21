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
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="mb-3 text-lg font-semibold">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block cursor-pointer rounded-lg border p-3 transition-colors duration-300 ${
                  answers[index]?.answer === option ? "bg-gray-100" : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="text-primary-color mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full rounded-lg bg-[#FF5A5F] py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#FF5A5F]"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
