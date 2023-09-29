import cn from "classnames";
function Button({ text, BgColor }) {
  return (
    <div
      className={cn(
        "flex h-[47px] w-full  cursor-pointer items-center justify-center rounded-md text-center font-medium text-white transition-colors duration-200 ease-out",
        BgColor,
      )}
    >
      {text}
    </div>
  );
}

export default Button;
