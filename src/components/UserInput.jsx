const UserInput = ({ value, setValue, placeholder, type }) => {
  return (
    <input
      className="w-full rounded-md p-3"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default UserInput;
