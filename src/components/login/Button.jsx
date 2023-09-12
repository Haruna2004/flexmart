function Button({ text, BgColor }) {
  return (
    <div>
      <div
        className={`w-[413px] h-[47px] bg-[${BgColor}] flex items-center justify-center text-center text-white font-medium rounded-md`}
      >
        {text}
      </div>
    </div>
  );
}

export default Button;
