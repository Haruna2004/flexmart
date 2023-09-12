import { arrowDown, hamMenu } from "../../assets";

function Menu() {
  return (
    <div className="flex text-white items-center bg-[#FF7C00] py-[0.4em] px-[0.3em] rounded-[0.3em] gap-[0.4em]">
      <img src={hamMenu} alt="M" className="w-[1.5em] h-[1.5em]" />
      <p className="text-[1em] font-bold hidden md:block">All CATEGORIES</p>
      <img
        src={arrowDown}
        alt="A"
        className="w-[1.5em] h-[1.5em] hidden md:block"
      />
    </div>
  );
}

export default Menu;
