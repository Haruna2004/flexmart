import { flexHubLogoII, flexhub_store } from "../../../assets";
import Menu from "./Menu";
import Profiles from "./Profiles";
import Search from "./Search";
function Header() {
  return (
    <div className="w-full bg-black pt-[1rem] tablet:pt-[1.2rem] pl-[1em] tablet:pl-[3.6em] pr-[1em] pb-[1.1em] shadow-md sticky top-0 z-20">
      {/* Desktop */}
      <div className="mx-auto max-w-5xl hidden tablet:block">
        <div className="w-[5.9em] h-[2.6em]">
          <img src={flexhub_store} alt="flexhub" className="object-fit" />
        </div>
        <div className="flex items-center justify-start mt-[0.5em]">
          <Menu />
          <Search />
          <Profiles />
        </div>
      </div>
      {/* Mobile */}
      <div className="tablet:hidden flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Menu />
            <img
              src={flexHubLogoII}
              alt="flexhub"
              className="w-[4.9em] h-[1.7em] -mb-[2px]"
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
