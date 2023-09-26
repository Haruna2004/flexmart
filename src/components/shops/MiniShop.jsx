import { home, arrow_foward, dropDown, stared, shirt } from "../../assets";
import { flash_sales_items } from "../../constants";
function MiniShop({ isFlash, isNew, shopItems, title }) {
  return (
    <div className="flex flex-col tablet:px-7 md:px-14 tablet:py-4 md:py-8 pt-5 w-full bg-[#F6F1F1]">
      {/* nav back */}
      <div className="flex items-center gap-[0.7em] cursor-pointer ml-4">
        <img src={home} alt="home" className="w-[1.12em] h-[1.12em]" />
        <img src={arrow_foward} alt="arrow" className="w-[0.9em] h-[0.9em]" />
        <p className="text-primary-500 text-[0.9rem] font-medium">{title}</p>
      </div>
      {/* sort */}
      <div className="self-end flex gap-1 items-center text-[1.05rem] font-medium mr-2">
        <p>Sort By:</p>
        {/* select */}
        <div className="flex items-center gap-[2.5rem] border px-2 py-1 cursor-pointer">
          <p>Default</p>
          <img src={dropDown} alt="drop" className="w-[1.5rem] h-[1.5rem]" />
        </div>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-5 p-3">
        {shopItems.map((idx) => (
          <FlashItem key={idx} isFlash={isFlash} isNew={isNew} />
        ))}
      </div>
    </div>
  );
}

export default MiniShop;

function FlashItem({ isFlash, isNew }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-[#eee] shadow-md cursor-pointer">
      <div className="relative w-fit px-8 py-2">
        <img src={shirt} alt="" className="w-[7.9rem] h-auto" />
        {isFlash && (
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Time />
          </div>
        )}
      </div>
      {/* details */}
      <div className="flex flex-col gap-1 items-center pb-3 pt-2">
        <h1 className="text-[1rem] font-semibold">Nike sports wear</h1>
        {!isNew && (
          <div className="flex">
            {[0, 1, 2, 3, 4].map((idx) => (
              <img
                key={idx}
                src={stared}
                alt="star"
                className="w-[0.8rem] h-[0.8rem] text-primary-500"
              />
            ))}
          </div>
        )}
        <p className="text-primary-500 text-[1.1rem]">₦ 35,000</p>
      </div>
    </div>
  );
}

function Time() {
  const { time } = flash_sales_items[0];

  return (
    <div className="flex justify-between gap-2">
      {time.map(({ id, value }) => (
        <div
          key={id}
          className="bg-black/60 text-white rounded-md py-[0.3rem] px-[0.5em] text-center"
        >
          <h1 className="text-[0.75rem] font-bold">{value}</h1>
          <p className="text-[0.48rem]">{id}</p>
        </div>
      ))}
    </div>
  );
}
