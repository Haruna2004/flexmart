import { arrowDown, hamMenu } from "../../assets";

function Menu() {
  return (
    <div className="flex text-white items-center bg-[#FF7C00] py-[0.4em] px-[0.3em] rounded-[0.3em] gap-[0.3em]">
      <img src={hamMenu} alt="M" className="w-[1.2em] h-[1.2em]" />
      <p className="text-[0.9em] font-bold">All CATEGORIES</p>
      <img src={arrowDown} alt="A" className="w-[1.2em] h-[1.2em]" />
    </div>
  );
}

export default Menu;
