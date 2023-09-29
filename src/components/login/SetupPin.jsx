import { Link } from "react-router-dom";
import PinInput from "./PinInput";

function SetupPin() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-[1.2em] flex w-full flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Set up your PIN</h3>
        <p className="text-center text-[12px] font-medium">
          Set up your pin for easy and secure login on flexhub
        </p>
        <div className="mt-[1.2em] px-2">
          <PinInput />
        </div>

        <h3 className="mt-[2em] text-center text-[23px]">Confirm your PIN</h3>
        <div className="mt-[1.2em] px-2">
          <PinInput />
        </div>

        <Link
          to="/login/complete"
          className="mt-[2.4em] cursor-pointer text-center text-[1.1em] font-bold text-[#FF7C00]"
        >
          Skip
        </Link>
      </div>
    </div>
  );
}

export default SetupPin;
