import Button from "./Button";
import Input from "./Input";

function CreateAccount() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Create your account</h3>
        <p className="text-[12px] font-medium text-center">
          <span>Let”s get started by creating your account.</span>
          <br />
          <span>To keep your account safe, we need a strong password</span>
        </p>
      </div>

      <div className="mt-[2.5em] flex flex-col gap-[1.5em]">
        <Input placeholder="Example@gmail.com" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
      </div>

      <div className="mt-[2em]">
        <Button text={"Continue"} BgColor={"#FF7C00"} />
      </div>
    </div>
  );
}

export default CreateAccount;
