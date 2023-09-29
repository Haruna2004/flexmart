import { favourite, profile, shoppingBag } from "../../../assets";

function Profiles() {
  return (
    <div className="ml-[2.1em] flex items-center justify-around gap-[1.8em] md:gap-4">
      <img
        src={favourite}
        alt="fav"
        className="h-[1.8em] w-[1.8em] tablet:h-[2.2em] tablet:w-[2.2em]"
      />
      <div className="relative flex h-[1.8em] w-[1.8em] items-center justify-center rounded-full bg-[#FF7C00] tablet:h-[2.7em] tablet:w-[2.7em]">
        <img
          src={shoppingBag}
          alt="bag"
          className="h-[1.1em] w-[1.1em] tablet:h-[1.5em] tablet:w-[1.5em]"
        />
        <div className="absolute bottom-4 left-4 flex h-[1.1em] w-[1.1em] items-center justify-center rounded-full bg-white tablet:bottom-6 tablet:left-6 tablet:h-[1.4em] tablet:w-[1.5em]">
          <p className="text-[0.7em]">4</p>
        </div>
      </div>
      <img
        src={profile}
        alt="prof"
        className=" h-[2em] w-[2em] tablet:h-[2.7em] tablet:w-[2.7em]"
      />
    </div>
  );
}

export default Profiles;
