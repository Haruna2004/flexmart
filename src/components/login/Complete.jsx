import { completed } from "../../assets";

function Complete() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="mt-[2.1em] flex flex-col gap-[0.3]">
        <h3 className="text-center text-[1.2em] break-keep">
          <span className="font-bold">Micheal, </span>
          <span>congratulation your account has been created</span>
        </h3>
      </div>
      <div className="w-[2.9em] h-[2.9em] mt-[3.8em]">
        <img src={completed} alt="success" />
      </div>
      <p className="text-[0.7em] font-medium mt-[1.2em]">
        You will be redirected in <span className="font-bold">3</span> secs
      </p>
    </div>
  );
}

export default Complete;
