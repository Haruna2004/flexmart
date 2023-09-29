import { flexHubLogoII } from "../../../assets";
import Menu from "./Menu";
import Profiles from "./Profiles";
import Search from "./Search";
import cn from "classnames";
function Header({ setOpenSide }) {
  const styles = {
    mediumHead:
      "tablet:flex md:flex-row md:items-center md:justify-evenly md:gap- xl:flex-row xl:items-end",
  };
  return (
    <div className="sticky top-0 z-20 w-full bg-black p-[1em] pb-[1.1em] shadow-md tablet:pt-[1.2rem]">
      {/* Desktop */}
      <div className={cn("mx-auto hidden max-w-5xl", styles.mediumHead)}>
        <div className=" flex justify-center xl:flex-col-reverse xl:items-start xl:gap-2 tablet:items-center tablet:gap-3">
          <Menu setOpenSide={setOpenSide} />
          <Logo />
        </div>
        <Search />
        <Profiles />
      </div>

      {/* Mobile */}
      <div className="flex flex-col tablet:hidden">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu setOpenSide={setOpenSide} />
            <img
              src={flexHubLogoII}
              alt="flexhub"
              className="-mb-[2px] h-[1.7em] w-[4.9em]"
            />
          </div>
          <Profiles />
        </div>
        <div className="w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;

function Logo() {
  return (
    <div className="-mb-1 flex flex-col justify-center xl:mb-1">
      <h1 className="text-2xl font-black text-white">
        <span className="text-primary-500">flex</span>hub
      </h1>
      <p className="whitespace-nowrap text-[0.6rem] text-gray-300">
        No. 1 Best online Store
      </p>
    </div>
  );
}
