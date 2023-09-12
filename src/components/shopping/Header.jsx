import { flexHubLogoII } from "../../assets";
import Menu from "./Menu";
import Profiles from "./Profiles";
import Search from "./Search";
function Header() {
  return (
    <div className="w-full bg-black pt-[1.9em] pl-[2.9em] pr-[1.1em] pb-[0.9em]">
      <div className="w-[4.5em] h-[2.4em]">
        <img src={flexHubLogoII} alt="flexhub" className="object-fit" />
      </div>
      <div className="flex items-center justify-between gap-10">
        <Menu />
        <Search />
        <Profiles />
      </div>
    </div>
  );
}

export default Header;
