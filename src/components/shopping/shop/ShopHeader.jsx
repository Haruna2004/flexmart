import cn from "classnames";

function ShopHeader({ text, bottomLine }) {
  return (
    <div className="w-full">
      <div
        className="bg-black rounded-sm p-3 text-white 
      text-xs font-bold uppercase inline-flex items-center justify-center"
      >
        {text}
      </div>
      <div
        className={cn(bottomLine && "border-b border-black/20 flex-1")}
      ></div>
    </div>
  );
}

export default ShopHeader;
