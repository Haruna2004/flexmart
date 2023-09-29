import Button from "./Button";
import Input from "./Input";

function PersonalDetailsII() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-[1.2em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[23px]">Personal details</h3>
        <p className="text-center text-[12px] font-medium">
          Almost there just a few more details
        </p>
      </div>

      <div className="flex w-full flex-col items-center px-2 sm:px-0 tablet:px-0 xs:px-0">
        <div className="mt-[2.5em] flex w-5/6 flex-col gap-[1.5em] tablet:w-3/4">
          <Input placeholder="Gender" />
          <Input placeholder="dd/mm/yy" />
        </div>

        <div className="mt-[2em] w-5/6 tablet:w-3/4">
          <Button text={"Continue"} BgColor={"bg-[#00000080]"} />
        </div>
        {/* Agreement */}
        <div className="mt-[1.4em] flex  gap-2">
          <input type="checkbox" name="tc" id="tc" className="cursor-pointer" />
          <p className="text-sm font-medium">
            <span>I read and consented to the</span>
            <span className="cursor-pointer text-[#FF7C00]">
              {" "}
              term and conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsII;
