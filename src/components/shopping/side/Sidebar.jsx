import cn from "classnames";
import { close } from "../../../assets";
import { categories } from "../../../constants";

function Sidebar({ openSide, setOpenSide }) {
  return (
    <div
      className={cn(
        "fixed top-0 z-30  h-screen w-full bg-black/20 transition-transform duration-150 xl:hidden",
        !openSide && "-translate-x-full",
      )}
    >
      <div className="h-full w-5/6 bg-white p-5 pt-5 sm:w-1/2  sm:pt-2 tablet:w-1/3 xs:w-3/5">
        <img
          src={close}
          alt="home"
          className="w-6 cursor-pointer hover:animate-pulse"
          onClick={() => setOpenSide(!openSide)}
        />
        <div className="mt-4 space-y-3 shadow-sm xs:mt-6 xs:space-y-5">
          {categories.map(({ title, icon }) => (
            <div
              key={title}
              className="flex w-full cursor-pointer items-center space-x-4 transition duration-150 hover:scale-105 active:text-primary-500"
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
