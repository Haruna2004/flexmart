import { arrowDown, hamMenu } from "../../../assets";

function Menu({ setOpenSide }) {
  return (
    <div
      className="flex text-white items-center xl:bg-[#FF7C00] xl:py-[0.4em] xl:px-[0.3em] rounded-[0.3em] gap-[0.4em] cursor-pointer"
      onClick={() => setOpenSide((prev) => !prev)}
    >
      <img
        src={hamMenu}
        alt="M"
        className="w-[1.8em] h-[2em] tablet:scale-125  xl:w-[1.5em] xl:h-[1.5em]"
      />
      <p className="text-[1em] font-bold hidden xl:block capitalize">
        All CATEGORIES
      </p>
      <img
        src={arrowDown}
        alt="A"
        className="w-[1.5em] h-[1.5em] hidden xl:block"
      />
    </div>
  );
}

export default Menu;
