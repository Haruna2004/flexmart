import { useNavigate } from "react-router-dom";
import { hero_phones } from "../../../assets";

function MainAdvert() {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full cursor-pointer bg-[#FF7C00] pb-[1.4rem] pl-[2.3rem] pr-2 pt-[2.3rem] tablet:rounded-md"
      onClick={() => navigate("/flash-sales")}
    >
      <img
        src={hero_phones}
        alt="phones"
        className="absolute bottom-0 right-0 h-[11.6rem] w-[19rem]"
      />
      <div className="relative flex flex-col justify-center gap-[1.7rem] text-white">
        <h1 className="flex flex-col text-[1.8rem] font-bold leading-tight">
          <span>Best </span>
          <span>Samsung </span>
          <span>Deals </span>
        </h1>
        <h3 className="text-[1.2em]">
          Amazing deals for you with 50% discount.
        </h3>
        <div className="w-[5.3rem] cursor-pointer rounded-md bg-black p-[0.75rem] text-center text-[0.75rem] font-bold">
          Shop now
        </div>
      </div>
    </div>
  );
}

export default MainAdvert;
