import { Link } from "react-router-dom";

function Input({ placeholder, icon, text, type, setShowPass }) {
  return (
    <div className="flex h-[55px] w-full items-center border px-3 transition-colors duration-200 focus-within:ring-1 focus-within:ring-orange-200">
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        className="flex-1 outline-none"
      />
      {icon && (
        <img
          src={icon}
          alt="i"
          className="h-6 w-6 cursor-pointer"
          onClick={() => setShowPass((prev) => !prev)}
        />
      )}
      {text && (
        <Link
          to="/login"
          className="cursor-pointer font-medium text-primary-500"
        >
          {text}
        </Link>
      )}
    </div>
  );
}

export default Input;
