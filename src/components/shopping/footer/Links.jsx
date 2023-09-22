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
    <div className="pl-5 tablet:pl-10 pr-5 tablet:pr-14 pt-4 pb-7">
      {/* FootLinks */}
      <FootLinks changeShowLink={changeShowLink} showLink={showLink} />
      <div className="flex mt-5 tablet:mt-16 gap-5 tablet:gap-40 flex-col-reverse tablet:flex-row">
        <SocialLinks changeShowLink={changeShowLink} showLink={showLink} />
        <PayMethods changeShowLink={changeShowLink} showLink={showLink} />
      </div>
    </div>
  );
}

function FootLinks({ showLink, changeShowLink }) {
  return (
    <div className="flex items-start justify-between flex-col tablet:flex-row gap-y-5">
      {foot_links.map(({ title, links }, index) => (
        <div key={index} className="w-full">
          {/* title */}
          <div
            className="flex justify-between items-center cursor-pointer w-full border-y tablet:border-y-0 p-2 tablet:p-0"
            onClick={() => changeShowLink(title)}
          >
            <h2 className="text-[1.2rem] font-bold uppercase ">{title}</h2>
            <img
              src={arrow_foward}
              alt="open"
              className="rotate-90 w-6 h-6 block tablet:hidden"
            />
          </div>

          <div
            className={cn(
              "flex flex-col gap-y-3 sm:mt-[1.13rem]",
              showLink !== title && "hidden tablet:flex"
            )}
          >
            {links.map(({ text, link }, index) => (
              <p href={link} key={index} className="text-[0.9rem]">
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
        className="flex justify-between items-center cursor-pointer w-full border-y tablet:border-y-0 p-2 tablet:p-0"
        onClick={() => changeShowLink("Join us on")}
      >
        <h2 className="text-[1.2rem] font-bold uppercase">Join us on</h2>
        <img
          src={arrow_foward}
          alt="open"
          className="rotate-90 w-6 h-6 block tablet:hidden"
        />
      </div>
      <div
        className={cn(
          "flex mt-[1.5rem] gap-3",
          showLink !== "Join us on" && "hidden tablet:flex"
        )}
      >
        {social_links.map(({ link, icon }, index) => (
          <img key={index} src={icon} alt={link} className="w-6 h-6" />
        ))}
      </div>
    </div>
  );
}

function PayMethods({ showLink, changeShowLink }) {
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between items-center cursor-pointer w-full border-y tablet:border-y-0 p-2 tablet:p-0"
        onClick={() => changeShowLink("Payment Methods")}
      >
        <h2 className="text-[1.2rem] font-bold uppercase">Payment Methods</h2>
        <img
          src={arrow_foward}
          alt="open"
          className="rotate-90 w-6 h-6 block tablet:hidden"
        />
      </div>
      <div
        className={cn(
          "flex mt-4",
          showLink !== "Payment Methods" && "hidden tablet:flex"
        )}
      >
        <img src={mastercard} alt="mastercard" className="w-14 h-14" />
        <img src={visa} alt="visa" className="w-14 h-14" />
      </div>
    </div>
  );
}

export default Links;
