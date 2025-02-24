/**
 * Input 컴포넌트
 *
 * @param {string} props.value - 상태 값
 * @param {Function} props.onChange - 상태 업데이트 함수
 * @param {string} props.placeholder - input placeholder
 * @param {string} props.type - input의 타입 (기본값 text)
 * @param {string} props.id
 * @returns
 */

const UserInput = ({ value, onChange, placeholder, type = "text", id }) => {
  return (
    <input
      className="w-full rounded-md p-3"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      id={id}
    />
  );
};

export default UserInput;
