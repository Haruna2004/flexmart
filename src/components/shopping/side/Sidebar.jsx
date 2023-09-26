import cn from "classnames";
import { home } from "../../../assets";
import { categories } from "../../../constants";

function Sidebar() {
  return (
    <div className={cn("fixed top-0 z-30  h-screen bg-black/20 w-full")}>
      <div className="bg-white/95 h-full w-1/2 p-5 pt-2">
        <img src={home} alt="home" className="cursor-pointer" />
        <div className="space-y-5 mt-6 shadow-sm">
          {categories.map(({ title, icon }) => (
            <div
              key={title}
              className="flex items-center w-full cursor-pointer space-x-4 hover:scale-105 active:text-primary-500 transition duration-150"
            >
              <img src={icon} alt="icon" className="" />
              <p className="whitespace-nowrap">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
