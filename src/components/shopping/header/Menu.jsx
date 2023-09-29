import { arrowDown, hamMenu } from "../../../assets";

function Menu({ setOpenSide }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-[0.4em] rounded-[0.3em] text-white xl:bg-[#FF7C00] xl:px-[0.3em] xl:py-[0.4em]"
      onClick={() => setOpenSide((prev) => !prev)}
    >
      <img
        src={hamMenu}
        alt="M"
        className="h-[2em] w-[1.8em] xl:h-[1.5em] xl:w-[1.5em] tablet:h-auto  tablet:min-w-[24px] tablet:scale-125"
      />
      <p className="hidden text-[1em] font-bold capitalize xl:block">
        All CATEGORIES
      </p>
      <img
        src={arrowDown}
        alt="A"
        className="hidden h-[1.5em] w-[1.5em] xl:block"
      />
    </div>
  );
}

export default Menu;
