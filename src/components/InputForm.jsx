const InputForm = ({ children, type, onSubmit }) => {
  return (
    <div className="bg-bg_color mt-1 flex h-screen w-full flex-col items-center">
      <div className="mt-10 flex w-1/3 flex-col items-center rounded-md bg-white p-6 shadow-lg">
        <h2 className="mt-5 text-4xl font-bold">{type}</h2>
        <form
          className="bg-bg_color mt-5 flex w-4/5 flex-col items-center gap-5 rounded-md p-5 shadow-md"
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
