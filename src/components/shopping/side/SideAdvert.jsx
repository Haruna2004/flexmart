import {
  suit_advert,
  suit_discount,
  fuji_advert,
  fuji_discount,
} from "../../../assets";
import AllCategories from "./AllCategories";
import cn from "classnames";

function SideAdvert({ openSide }) {
  return (
    <div className="hidden xl:flex flex-col items-center gap-[14.8rem]">
      {/*  */}
      <div className="w-fit h-fit relative">
        <div className={cn("bg-white w-56 h-fit", !openSide && "opacity-0")}>
          <AllCategories />
        </div>
        <img
          src={suit_advert}
          alt="suit"
          className={cn("w-56 h-96 absolute top-0 -z-10", !openSide && "z-0")}
        />
      </div>
      {/*  */}
      <img src={suit_discount} alt="suit" className="w-56 h-96" />
      <img src={fuji_advert} alt="fuji" className="w-56 h-96" />
      <img src={fuji_discount} alt="fuji" className="w-56 h-96" />
    </div>
  );
}

export default SideAdvert;
