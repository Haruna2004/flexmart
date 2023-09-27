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
      <div className="hidden sm:flex flex-col gap-4 ">
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

      <div className="hidden tablet:flex flex-col gap-4">
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
        isCenter && "w[19.1rem] w-full h-[13.7rem] bg-no-repeat bg-cover",
        !isCenter && "w-[10rem] h-[6.3rem]",
      )}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        className={cn(
          "text-white text-[0.9rem] font-medium p-[0.37rem] flex flex-col items-center gap-[0.37rem] uppercase",
          blackBg && "bg-black/60",
          isCenter && "-mt-14 bg-primary-500/60 gap-0",
        )}
      >
        <h2
          className={cn("text-primary-500 font-bold", isCenter && "text-white")}
        >
          {text1}
        </h2>
        <h2>{text2}</h2>
      </div>
    </div>
  );
}
