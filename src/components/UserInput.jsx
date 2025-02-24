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
