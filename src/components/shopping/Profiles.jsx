import { favourite, profile, shoppingBag } from "../../assets";

function Profiles() {
  return (
    <div className="flex items-center justify-around gap-[1.4em]">
      <img src={favourite} alt="fav" className="w-[1.8em] h-[1.8em]" />
      <div className="w-[2.1em] h-[2.1em] bg-[#FF7C00] rounded-full flex items-center justify-center relative">
        <img src={shoppingBag} alt="bag" className="w-[1.2em] h-[1.2em]" />
        <div className="absolute rounded-full bg-white left-5 bottom-4 w-[1.2em] h-[1.2em] flex justify-center items-center">
          <p>4</p>
        </div>
      </div>
      <img src={profile} alt="prof" className="w-[2.1em] h-[2.1em]" />
    </div>
  );
}

export default Profiles;
