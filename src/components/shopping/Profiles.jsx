import { favourite, profile, shoppingBag } from "../../assets";

function Profiles() {
  return (
    <div className="flex ml-[2.1em] items-center justify-around  gap-[1.8em]">
      <img src={favourite} alt="fav" className="w-[2.2em] h-[2.2em]" />
      <div className="w-[2.7em] h-[2.7em] bg-[#FF7C00] rounded-full flex items-center justify-center relative">
        <img src={shoppingBag} alt="bag" className="w-[1.5em] h-[1.5em]" />
        <div className="absolute rounded-full bg-white left-6 bottom-6 w-[1.5em] h-[1.4em] flex justify-center items-center">
          <p className="text-[0.7em]">4</p>
        </div>
      </div>
      <img src={profile} alt="prof" className="w-[2.7em] h-[2.7em]" />
    </div>
  );
}

export default Profiles;
