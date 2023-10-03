import { useState } from "react";
import { mastercard, visa, arrow_foward } from "../../../assets";
import { foot_links, social_links } from "../../../constants";
import cn from "classnames";

function Links() {
  const [showLink, setShowLink] = useState("");
  function changeShowLink(title) {
    title === showLink ? setShowLink("") : setShowLink(title);
  }

  return (
    <div className="pb-7 pl-5 pr-5 pt-4 tablet:pl-10 tablet:pr-14">
      {/* FootLinks */}
      <FootLinks changeShowLink={changeShowLink} showLink={showLink} />
      <div className="mt-5 flex flex-col-reverse gap-5 tablet:mt-16 tablet:flex-row tablet:gap-40">
        <SocialLinks changeShowLink={changeShowLink} showLink={showLink} />
        <PayMethods changeShowLink={changeShowLink} showLink={showLink} />
      </div>
    </div>
  );
}

function FootLinks({ showLink, changeShowLink }) {
  return (
    <div className="flex flex-col items-start justify-between gap-y-5 tablet:flex-row">
      {foot_links.map(({ title, links }, index) => (
        <div key={index} className="w-full">
          {/* title */}
          <div
            className="flex w-full cursor-pointer items-center justify-between border-y p-2 tablet:border-y-0 tablet:p-0"
            onClick={() => changeShowLink(title)}
          >
            <h2 className="text-[1rem] font-bold uppercase tablet:text-[1.2rem] ">
              {title}
            </h2>
            <img
              src={arrow_foward}
              alt="open"
              className={cn(
                "block h-6 w-6 transition-transform duration-300 tablet:hidden",
                showLink === title && "rotate-90",
              )}
            />
          </div>

          <div
            className={cn(
              "flex flex-col gap-y-3 sm:mt-[1.13rem]",
              showLink !== title && "hidden tablet:flex",
            )}
          >
            {links.map(({ text, link }, index) => (
              <p
                key={index}
                className="text-[0.9rem] transition-colors duration-200 hover:underline"
              >
                <a href={link}>{text}</a>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialLinks({ showLink, changeShowLink }) {
  return (
    <div className="flex flex-col items-start">
      <div
        className="flex w-full cursor-pointer items-center justify-between border-y p-2 tablet:border-y-0 tablet:p-0"
        onClick={() => changeShowLink("Join us on")}
      >
        <h2 className="text-[1rem] font-bold uppercase tablet:text-[1.2rem]">
          Join us on
        </h2>
        <img
          src={arrow_foward}
          alt="open"
          className={cn(
            "block h-6 w-6 transition-transform duration-300 tablet:hidden",
            showLink === "Join us on" && "rotate-90",
          )}
        />
      </div>
      <div
        className={cn(
          "mt-[1.5rem] flex gap-3",
          showLink !== "Join us on" && "hidden tablet:flex",
        )}
      >
        {social_links.map(({ link, icon }) => (
          <a href={link} key={link} rel="noreferrer" target="_blank">
            <img src={icon} alt={link} className="h-6 w-6 cursor-pointer" />
          </a>
        ))}
      </div>
    </div>
  );
}

function PayMethods({ showLink, changeShowLink }) {
  return (
    <div className="flex flex-col">
      <div
        className="flex w-full cursor-pointer items-center justify-between border-y p-2 tablet:border-y-0 tablet:p-0"
        onClick={() => changeShowLink("Payment Methods")}
      >
        <h2 className="text-[1rem] font-bold uppercase tablet:text-[1.2rem]">
          Payment Methods
        </h2>
        <img
          src={arrow_foward}
          alt="open"
          className={cn(
            "block h-6 w-6 transition-transform duration-300 tablet:hidden",
            showLink === "Payment Methods" && "rotate-90",
          )}
        />
      </div>
      <div
        className={cn(
          "mt-4 flex",
          showLink !== "Payment Methods" && "hidden tablet:flex",
        )}
      >
        <img src={mastercard} alt="mastercard" className="h-14 w-14" />
        <img src={visa} alt="visa" className="h-14 w-14" />
      </div>
    </div>
  );
}

export default Links;
