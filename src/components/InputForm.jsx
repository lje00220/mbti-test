const InputForm = ({ children, type, onSubmit }) => {
  return (
    <div className="mt-1 flex h-screen w-full flex-col items-center bg-bg_color">
      <div className="mt-10 flex w-full flex-col items-center rounded-md bg-[#ffffff] p-6 shadow-lg sm:w-5/6 md:w-3/5 lg:w-2/5">
        <h2 className="mt-5 text-4xl font-bold">{type}</h2>
        <form
          className="mt-5 flex flex-col items-center gap-5 rounded-md bg-bg_color p-5 shadow-md sm:w-11/12 md:w-4/5 lg:w-4/5"
          onSubmit={onSubmit}
        >
          {children}
          <button className="pinkBtn w-full" type="submit">
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
