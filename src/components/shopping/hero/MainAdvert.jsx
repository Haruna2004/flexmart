import { useNavigate } from "react-router-dom";
import { hero_phones } from "../../../assets";
import { useEffect, useState } from "react";
import cn from "classnames";
const ads = [0, 1, 2, 3];
function MainAdvert() {
  const [currentAd, setCurrentAd] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentAd === ads.length - 1) {
        setCurrentAd(0);

        return;
      }
      setCurrentAd(currentAd + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentAd]);

  function goTo(idx) {
    setCurrentAd(idx);
  }
  return (
    <div className="relative w-full bg-[#FF7C00]  tablet:rounded-md">
      <AdvertProduct />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
        {ads.map((idx) => (
          <div
            key={idx}
            className={cn(
              "h-2 w-2 cursor-pointer rounded-full bg-white transition-colors duration-300",
              currentAd !== idx && "bg-gray-500",
            )}
            onClick={() => goTo(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MainAdvert;

function AdvertProduct() {
  const naviage = useNavigate();
  return (
    <div
      onClick={() => naviage("/flash-sales")}
      className="relative w-full cursor-pointer pb-[1.4rem] pl-[2.3rem] pr-2 pt-[2.3rem]"
    >
      <img
        src={hero_phones}
        alt="phones"
        className="absolute bottom-0 right-0 h-[11.6rem] w-[19rem]"
      />
      <div className="relative flex flex-col justify-center gap-[1.7rem] text-white">
        <h1 className=" text-[1.8rem] font-bold leading-tight">
          Best <br />
          Samsung <br />
          Deals <br />
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
