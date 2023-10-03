import { useNavigate } from "react-router-dom";
import { home, arrow_foward, dropDown, stared, shirt } from "../../assets";
import { flash_sales_items } from "../../constants";
function MiniShop({ isFlash, isNew, shopItems, title }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col bg-[#F6F1F1] pt-5 xl:px-14 xl:py-8 tablet:px-7 tablet:py-4">
      {/* nav back */}
      <div
        className="ml-4 flex cursor-pointer items-center gap-[0.7em]"
        onClick={() => navigate("/")}
      >
        <img src={home} alt="home" className="h-[1.12em] w-[1.12em]" />
        <img src={arrow_foward} alt="arrow" className="h-[0.9em] w-[0.9em]" />
        <p className="text-[0.9rem] font-medium text-primary-500">{title}</p>
      </div>
      {/* sort */}
      <div className="mr-2 flex items-center gap-1 self-end text-[1.05rem] font-medium">
        <p>Sort By:</p>
        {/* select */}
        <div className="flex cursor-pointer items-center gap-[2.5rem] border px-2 py-1">
          <p>Default</p>
          <img src={dropDown} alt="drop" className="h-[1.5rem] w-[1.5rem]" />
        </div>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 p-3 sm:grid-cols-2 xl:grid-cols-4 tablet:grid-cols-3">
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
    <div className="flex cursor-pointer flex-col items-center gap-3 bg-[#eee] shadow-md">
      <div className="relative w-fit px-8 py-2">
        <img src={shirt} alt="" className="h-auto w-[7.9rem]" />
        {isFlash && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Time />
          </div>
        )}
      </div>
      {/* details */}
      <div className="flex flex-col items-center gap-1 pb-3 pt-2">
        <h1 className="text-[1rem] font-semibold">Nike sports wear</h1>
        {!isNew && (
          <div className="flex">
            {[0, 1, 2, 3, 4].map((idx) => (
              <img
                key={idx}
                src={stared}
                alt="star"
                className="h-[0.8rem] w-[0.8rem] text-primary-500"
              />
            ))}
          </div>
        )}
        <p className="text-[1.1rem] text-primary-500">₦ 35,000</p>
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
          className="rounded-md bg-black/60 px-[0.5em] py-[0.3rem] text-center text-white"
        >
          <h1 className="text-[0.75rem] font-bold">{value}</h1>
          <p className="text-[0.48rem]">{id}</p>
        </div>
      ))}
    </div>
  );
}
