import cn from "classnames";
import { close } from "../../../assets";
import { categories } from "../../../constants";

function Sidebar({ openSide, setOpenSide }) {
  return (
    <div
      className={cn(
        "fixed top-0 z-30  h-screen bg-black/20 w-full transition-transform duration-150 xl:hidden",
        !openSide && "-translate-x-full"
      )}
    >
      <div className="bg-white h-full w-5/6 xs:w-3/5 sm:w-1/2 tablet:w-1/3  p-5 pt-5 sm:pt-2">
        <img
          src={close}
          alt="home"
          className="cursor-pointer w-6 hover:animate-pulse"
          onClick={() => setOpenSide(!openSide)}
        />
        <div className="space-y-3 xs:space-y-5 mt-4 xs:mt-6 shadow-sm">
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
