import cn from "classnames";

function ShopHeader({ text, bottomLine }) {
  return (
    <div className="w-full">
      <div
        className="inline-flex items-center justify-center rounded-sm 
      bg-black p-3 text-xs font-bold uppercase text-white"
      >
        {text}
      </div>
      <div
        className={cn(bottomLine && "flex-1 border-b border-black/20")}
      ></div>
    </div>
  );
}

export default ShopHeader;
