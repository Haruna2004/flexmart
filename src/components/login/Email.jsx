import Button from "./Button";
import Input from "./Input";
function Email() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">What is your email address?</h3>
        <p className="text-[12px] font-medium">
          Type your email address to login or create a flexhub account
        </p>
      </div>

      <div className="mt-[2.5em]">
        <Input placeholder="Email" />
      </div>

      <div className="mt-[2em]">
        <Button text={"Continue"} BgColor={"#FF7C00"} />
      </div>

      <h5 className="text-[15px] font-bold text-[#FF7C00] mt-[1.1em]">
        Login or register with phone number
      </h5>

      <div className="mt-[3em]">
        <Button text={"Login with Facebook"} BgColor={"#0288D1"} />
      </div>
    </div>
  );
}

export default Email;
