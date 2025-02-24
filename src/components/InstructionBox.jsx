const InstructionBox = ({ title, explain }) => {
  return (
    <div className="w-full max-w-sm transform rounded-lg bg-box_color p-5 shadow-lg transition duration-200 hover:scale-105">
      <h4 className="mb-3 text-xl text-black">{title}</h4>
      <p className="text-grey">{explain}</p>
    </div>
  );
};

export default InstructionBox;
