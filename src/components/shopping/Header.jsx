import { flexHubLogoII } from "../../assets";
import Menu from "./Menu";
import Profiles from "./Profiles";
import Search from "./Search";
function Header() {
  return (
    <div className="w-full bg-black pt-[2.4em] pl-[3.6em] pr-[1.4em] pb-[1.1em]">
      <div className="mx-auto max-w-5xl">
        <div className="w-[5.9em] h-[2.6em]">
          <img src={flexHubLogoII} alt="flexhub" className="object-fit" />
        </div>
        <div className="flex items-center justify-start mt-[0.9em]">
          <Menu />
          <Search />
          <Profiles />
        </div>
      </div>
    </div>
  );
}

export default Header;
