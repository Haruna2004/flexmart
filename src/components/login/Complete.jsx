import { useNavigate } from "react-router-dom";
import { completed } from "../../assets";

function Complete() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/"), 3000);
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="mt-[2.1em] flex flex-col gap-[0.3]">
        <h3 className="break-keep text-center text-[1.2em]">
          <span className="font-bold">Micheal, </span>
          <span>congratulation your account has been created</span>
        </h3>
      </div>
      <div className="mt-[3.8em] h-[2.9em] w-[2.9em]">
        <img src={completed} alt="success" />
      </div>
      <p className="mt-[1.2em] text-[0.7em] font-medium">
        You will be redirected in <span className="font-bold">3</span> secs
      </p>
    </div>
  );
}

export default Complete;
