function Input({ placeholder }) {
  return (
    <div className="h-[55px] w-[413px] flex border ">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-3 outline-none"
      />
    </div>
  );
}

export default Input;
