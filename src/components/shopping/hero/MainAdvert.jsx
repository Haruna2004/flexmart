import { hero_phones } from "../../../assets";

function MainAdvert() {
  return (
    <div className="relative w-full bg-[#FF7C00] pt-[2.3rem] pl-[2.3rem] pb-[1.4rem] pr-2 tablet:rounded-md">
      <img
        src={hero_phones}
        alt="phones"
        className="absolute w-[19rem] h-[11.6rem] right-0 bottom-0"
      />
      <div className="text-white flex flex-col justify-center gap-[1.7rem] relative">
        <h1 className="text-[1.8rem] font-bold leading-tight flex flex-col">
          <span>Best </span>
          <span>Samsung </span>
          <span>Deals </span>
        </h1>
        <h3 className="text-[1.2em]">
          Amazing deals for you with 50% discount.
        </h3>
        <div className="text-[0.75rem] font-bold bg-black rounded-md p-[0.75rem] text-center w-[5.3rem] cursor-pointer">
          Shop now
        </div>
      </div>
    </div>
  );
}

export default MainAdvert;
