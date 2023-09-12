import PinInput from "./PinInput";

function SetupPin() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Set up your PIN</h3>
        <p className="text-[12px] font-medium text-center">
          Set up your pin for easy and secure login on flexhub
        </p>
        <div className="mt-[1.2em]">
          <PinInput />
        </div>

        <h3 className="text-center text-[23px] mt-[2em]">Confirm your PIN</h3>
        <div className="mt-[1.2em]">
          <PinInput />
        </div>

        <p className="text-[1.1em] text-[#FF7C00] text-center font-bold mt-[2.4em]">
          Skip
        </p>
      </div>
    </div>
  );
}

export default SetupPin;
