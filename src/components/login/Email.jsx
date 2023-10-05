import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
function Email() {
  return (
    <div className="flex w-full flex-1 flex-col items-center ">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">What is your email address?</h3>
        <p className="text-center text-[12px] font-medium">
          Type your email address to login or create a flexhub account
        </p>
      </div>

      <div className="flex w-full flex-col items-center px-2 sm:px-0 tablet:px-0 xs:px-0">
        {/*  */}
        <div className=" mt-[2.5em] w-5/6">
          <Input placeholder="Email" />
        </div>

        <Link to="/login/create-acct" className=" mt-[2em] w-5/6">
          <Button text={"Continue"} BgColor={"bg-[#FF7C00]"} />
        </Link>

        <h5 className="mt-[1.1em] text-[15px] font-bold text-[#FF7C00]">
          <Link to="/login/phone">Login or register with phone number</Link>
        </h5>

        <div
          className="mt-[3em] w-5/6"
          onClick={() =>
            alert(
              "Fast and easy Login with Facebooks is coming to you soonest.",
            )
          }
        >
          <Button text={"Login with Facebook"} BgColor={"bg-[#0288D1]"} />
        </div>
      </div>
    </div>
  );
}

export default Email;

// max-w-[413px]
