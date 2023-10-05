import Email from "../components/login/Email";
// import { flexHubLogo } from "../assets";
import { Routes, Route } from "react-router-dom";
import Complete from "../components/login/Complete";
import SetupPin from "../components/login/SetupPin";
import CreateAccount from "../components/login/CreateAccount";
import PersonalDetails from "../components/login/PersonalDetails";
import PersonalDetailsII from "../components/login/PersonalDetailsII";
import Phone from "../components/login/Phone";

export default function Login() {
  return (
    <div className="w-100% h-screen font-poppins">
      <div className="mx-auto h-screen max-w-xl">
        <div className="flex h-full flex-col items-center justify-between">
          {/* Logo */}
          <div className="mt-[2em]">
            <h1 className="text-center text-[1.8rem] font-bold tracking-wider text-primary-500">
              Flexmart
            </h1>
          </div>
          {/* Main section */}
          <Routes>
            <Route path="/" element={<Email />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/create-acct" element={<CreateAccount />} />
            <Route path="/personal" element={<PersonalDetails />} />
            <Route path="/personal2" element={<PersonalDetailsII />} />
            <Route path="/setpin" element={<SetupPin />} />
            <Route path="/complete" element={<Complete />} />
          </Routes>

          {/* Footer */}
          <p className="mb-[3em] p-1 text-center text-xs sm:mb-[1em] sm:p-0">
            For further support, you may visit the help center or contact our
            customer service team.
          </p>
        </div>
      </div>
    </div>
  );
}
