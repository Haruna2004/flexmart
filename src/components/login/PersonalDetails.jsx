import Button from "./Button";
import Input from "./Input";

function PersonalDetails() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Personal details</h3>
        <p className="text-[12px] font-medium text-center">
          We just need you to fil in some details
        </p>
      </div>

      <div className="mt-[2.5em] flex flex-col gap-[1.5em]">
        <Input placeholder="First name*" />
        <Input placeholder="Middle name" />
        <Input placeholder="Last name*" />
        <Input placeholder="Phone number" />
      </div>

      <div className="mt-[2em]">
        <Button text={"Continue"} BgColor={"#FF7C00"} />
      </div>
    </div>
  );
}

export default PersonalDetails;
