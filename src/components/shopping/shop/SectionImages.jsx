import cn from "classnames";
import {
  vintage,
  game_world,
  bedroom_deco,
  home_deco,
  clothing,
} from "../../../assets";
function SectionImages() {
  return (
    <div className="flex justify-around gap-x-4">
      <div className="hidden flex-col gap-4 sm:flex tablet:flex ">
        <TextImage imgSrc={vintage} text1="Vintage" text2="World" blackBg />
        <TextImage imgSrc={game_world} text1="Game" text2="World" />
      </div>
      {/* center image */}

      <TextImage
        imgSrc={bedroom_deco}
        text1="Bedroom"
        text2="Decor Beautiful"
        isCenter
      />

      <div className="hidden flex-col gap-4 tablet:flex">
        <TextImage imgSrc={clothing} text1="Clothing" text2="Accesories" />
        <TextImage
          imgSrc={home_deco}
          text1="Home"
          text2="Decor Beautiful"
          blackBg
        />
      </div>
    </div>
  );
}

export default SectionImages;

function TextImage({ text1, text2, blackBg, imgSrc, isCenter }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-contain",
        isCenter && "w[19.1rem] h-[13.7rem] w-full bg-cover bg-no-repeat",
        !isCenter && "h-[6.3rem] w-[10rem]",
      )}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-[0.37rem] p-[0.37rem] text-[0.9rem] font-medium uppercase text-white",
          blackBg && "bg-black/60",
          isCenter && "-mt-14 gap-0 bg-primary-500/60",
        )}
      >
        <h2
          className={cn("font-bold text-primary-500", isCenter && "text-white")}
        >
          {text1}
        </h2>
        <h2>{text2}</h2>
      </div>
    </div>
  );
}
