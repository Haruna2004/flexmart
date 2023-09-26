import {
  suit_advert,
  suit_discount,
  fuji_advert,
  fuji_discount,
} from "../../../assets";

function SideAdvert() {
  return (
    <div className="hidden tablet:flex flex-col items-center gap-[14.8rem]">
      <img src={suit_advert} alt="suit" className="w-56 h-96" />
      <img src={suit_discount} alt="suit" className="w-56 h-96" />
      <img src={fuji_advert} alt="fuji" className="w-56 h-96" />
      <img src={fuji_discount} alt="fuji" className="w-56 h-96" />
    </div>
  );
}

export default SideAdvert;
