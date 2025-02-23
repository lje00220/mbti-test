const InstructionBox = ({ title, explain }) => {
  return (
    <div className="bg-box_color w-96 transform rounded-lg p-5 shadow-lg transition duration-200 hover:scale-105">
      <h4 className="mb-3 text-xl text-black">{title}</h4>
      <p className="text-grey">{explain}</p>
    </div>
  );
};

export default InstructionBox;
