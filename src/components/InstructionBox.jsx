/**
 *  홈 화면의 설명 박스 컴포넌트
 *
 * @param {string} props.title - 설명의 제목
 * @param {string} props.explain - 설명의 내용
 * @returns
 */

const InstructionBox = ({ title, explain }) => {
  return (
    <div className="w-full max-w-sm transform rounded-lg bg-box_color p-5 shadow-lg transition duration-200 hover:scale-105">
      <h4 className="mb-3 text-xl text-black">{title}</h4>
      <p className="text-grey">{explain}</p>
    </div>
  );
};

export default InstructionBox;
