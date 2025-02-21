const InputForm = ({ children, type, onSubmit }) => {
  return (
    <div className="mt-1 flex h-screen w-full flex-col items-center bg-[#f3f4f6]">
      <div className="mt-10 flex w-1/3 flex-col items-center rounded-md bg-white p-6 shadow-lg">
        <h2 className="mt-5 text-4xl font-bold">{type}</h2>
        <form
          className="mt-5 flex w-4/5 flex-col items-center gap-5 rounded-md bg-[#f3f4f6] p-5 shadow-md"
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="rounded-xl bg-[#ff5a5f] px-3 py-2 text-white"
            type="submit"
          >
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
