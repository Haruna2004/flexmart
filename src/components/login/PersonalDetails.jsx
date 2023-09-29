import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function PersonalDetails() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Personal details</h3>
        <p className="text-center text-[12px] font-medium">
          We just need you to fill in some details
        </p>
      </div>

      <div className="flex w-full flex-col items-center px-2 sm:px-0 tablet:px-0 xs:px-0">
        <div className="mt-[2.5em] flex w-5/6 flex-col gap-[1.5em] tablet:w-3/4">
          <Input placeholder="First name*" />
          <Input placeholder="Middle name" />
          <Input placeholder="Last name*" />
          <Input placeholder="Phone number" type="number" />
        </div>

        <Link to="/login/personal2" className="mt-[2em] w-5/6 tablet:w-3/4">
          <Button text={"Continue"} BgColor={"bg-[#FF7C00]"} />
        </Link>
      </div>
    </div>
  );
}

export default PersonalDetails;
