import Email from "../components/login/Email";
import { flexHubLogo } from "../assets";
// import Complete from "../components/login/Complete";
// import SetupPin from "../components/login/SetupPin";
// import CreateAccount from "../components/login/CreateAccount";
// import PersonalDetails from "../components/login/PersonalDetails";
// import PersonalDetailsII from "../components/login/PersonalDetailsII";
// import Phone from "../components/login/Phone";

export default function Login() {
  return (
    <div className="w-100% h-screen">
      <div className="max-w-md mx-auto h-screen">
        <div className="flex flex-col items-center justify-between h-full">
          {/* Logo */}
          <div className="w-[8em] h-[2em] mt-[2em]">
            <img src={flexHubLogo} alt="FlexHub" className="object-fit" />
          </div>
          {/* Main section */}
          <Email />
          {/* Footer */}
          <p className="text-center mb-[1em] text-xs">
            For further support, you may visit the help center or contact our
            customer service team.
          </p>
        </div>
      </div>
    </div>
  );
}
