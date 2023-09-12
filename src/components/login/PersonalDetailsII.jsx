import Button from "./Button";
import Input from "./Input";

function PersonalDetailsII() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Personal details</h3>
        <p className="text-[12px] font-medium text-center">
          Almost there just a few more details
        </p>
      </div>

      <div className="mt-[2.5em] flex flex-col gap-[1.5em]">
        <Input placeholder="Gender" />
        <Input placeholder="dd/mm/yy" />
      </div>

      <div className="mt-[2em]">
        <Button text={"Continue"} BgColor={"#00000080"} />
      </div>
      {/* Agrrement */}
      <div className="flex gap-2 mt-[1.4em]">
        <input type="checkbox" name="tc" id="tc" />
        <p className="text-sm font-medium">
          <span>I read and consented to the</span>
          <span className="text-[#FF7C00]"> term and conditions</span>
        </p>
      </div>
    </div>
  );
}

export default PersonalDetailsII;
