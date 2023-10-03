import { hero_delivery, hero_family } from "../../../assets";
import MainAdvert from "./MainAdvert";
import SubAdvert from "./SubAdvert";

function Hero() {
  return (
    <div className="flex flex-col tablet:pt-[1.8rem] ">
      {/* Advert */}
      <div className="flex items-center justify-between gap-7">
        <MainAdvert />

        <div className="flex-col gap-5 hidden xl:flex">
          <SubAdvert
            mainText="Enjoy our free
delivery service"
            subText={"In 5 different states in nigeria."}
            imgSrc={hero_delivery}
          />
          <SubAdvert
            mainText={"Enjoy unlimited discounts"}
            subText={"When you purchase your first items with us."}
            imgSrc={hero_family}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
