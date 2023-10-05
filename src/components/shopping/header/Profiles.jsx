import { useNavigate } from "react-router-dom";
import { favourite, profile, shoppingBag } from "../../../assets";

function Profiles() {
  const navigate = useNavigate();
  return (
    <div className="ml-[2.1em] flex items-center justify-around gap-[1.8em] md:gap-4">
      <img
        src={favourite}
        alt="fav"
        className="h-[1.8em] w-[1.8em] cursor-pointer tablet:h-[2.2em] tablet:w-[2.2em]"
        onClick={() =>
          alert(
            "Coming soon... Items you like but do not want to add to your cart are here in favourites.",
          )
        }
      />
      <div
        className="relative flex h-[1.8em] w-[1.8em] cursor-pointer items-center justify-center rounded-full bg-[#FF7C00] tablet:h-[2.7em] tablet:w-[2.7em]"
        onClick={() => alert("Cart is coming soon")}
      >
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
        className=" h-[2em] w-[2em] cursor-pointer tablet:h-[2.7em] tablet:w-[2.7em]"
        onClick={() => navigate("/login")}
      />
    </div>
  );
}

export default Profiles;
