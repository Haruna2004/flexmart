function Input({ placeholder, icon, text }) {
  return (
    <div className="flex h-[55px] w-full items-center border px-3">
      <input
        type="text"
        placeholder={placeholder}
        className="px3 flex-1 outline-none"
      />
      {icon && <img src={icon} alt="i" className="h-6 w-6 cursor-pointer" />}
      {text && (
        <p className="cursor-pointer font-medium text-primary-500">{text}</p>
      )}
    </div>
  );
}

export default Input;
