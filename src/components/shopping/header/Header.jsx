import { flexHubLogoII, flexhub_store } from "../../../assets";
import Menu from "./Menu";
import Profiles from "./Profiles";
import Search from "./Search";
import cn from "classnames";
function Header({ setOpenSide }) {
  const styles = {
    mediumHead: "tablet:flex md:flex-row md:items-center xl:flex-col ",
  };
  return (
    <div className="sticky top-0 z-20 w-full bg-black pb-[1.1em] pl-[1em] pr-[1em] pt-[1rem] shadow-md tablet:pl-[3.6em] tablet:pt-[1.2rem]">
      {/* Desktop */}
      <div
        className={cn(
          "tablet:bloc mx-auto hidden max-w-5xl",
          styles.mediumHead,
        )}
      >
        <div className="h-[2.6em] w-[5.9em]">
          <img src={flexhub_store} alt="flexhub" className="object-fit" />
        </div>
        <div className="mt-[0.5em] flex items-center justify-start">
          <Menu setOpenSide={setOpenSide} />
          <Search />
          <Profiles />
        </div>
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
