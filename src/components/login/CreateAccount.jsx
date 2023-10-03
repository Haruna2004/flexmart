import Button from "./Button";
import Input from "./Input";
import { eyeOff } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Create your account</h3>
        <p className="text-center text-[12px] font-medium">
          <span>Let”s get started by creating your account.</span>
          <br />
          <span>To keep your account safe, we need a strong password</span>
        </p>
      </div>

      <div className="flex w-full flex-col items-center px-2 sm:px-0 tablet:px-0 xs:px-0">
        <div className="mt-[2.5em] flex w-5/6 flex-col gap-[1.5em] tablet:w-3/4">
          <Input placeholder="Example@gmail.com" text={"Edit"} />
          <Input
            placeholder="Password"
            icon={eyeOff}
            type={showPass && "password"}
            setShowPass={setShowPass}
          />
          <Input
            placeholder="Confirm Password"
            icon={eyeOff}
            type={showPass && "password"}
            setShowPass={setShowPass}
          />
        </div>

        <Link to="/login/personal" className="mt-[2em] w-5/6  tablet:w-3/4">
          <Button text={"Continue"} BgColor={"bg-[#FF7C00]"} />
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
