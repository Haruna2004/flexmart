import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function Phone() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">What is your phone number?</h3>
        <p className="text-center text-[12px] font-medium">
          Type your phone number to login or create a flexhub account
        </p>
      </div>

      <div className="flex w-full flex-col items-center px-2 sm:px-0 tablet:px-0 xs:px-0">
        <div className="mt-[2.5em] w-3/4">
          <Input placeholder="Phone number" type="number" />
        </div>

        <Link to="/login/create-acct" className="mt-[2em] w-3/4">
          <Button text={"Continue"} BgColor={"bg-[#FF7C00]"} />
        </Link>

        <h5 className="mt-[1.1em] text-[15px] font-bold text-[#FF7C00]">
          <Link to="/login">Login or register with email address</Link>
        </h5>
      </div>
    </div>
  );
}

export default Phone;
