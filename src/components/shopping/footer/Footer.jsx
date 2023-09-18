import { mastercard, send, visa } from "../../../assets";
import { foot_links, social_links } from "../../../constants";
function Footer() {
  return (
    <div className="">
      <NewsLetter />
      <Links />
    </div>
  );
}

export default Footer;

function Links() {
  return (
    <div className="pl-10 pr-14 pt-4 pb-7">
      {/* FootLinks */}
      <FootLinks />
      {/* Social links */}
      <div className="flex mt-16 gap-40">
        <div className="flex flex-col items-start">
          <h2 className="text-[1.2rem] font-bold uppercase">Join us on</h2>
          <div className="flex mt-[1.5rem] gap-3">
            {social_links.map(({ link, icon }, index) => (
              <img key={index} src={icon} alt={link} className="w-6 h-6" />
            ))}
          </div>
        </div>
        {/* payment */}
        <div className="flex flex-col">
          <h2 className="text-[1.2rem] font-bold uppercase">Payment Methods</h2>
          <div className="flex mt-4">
            <img src={mastercard} alt="mastercard" className="w-14 h-14" />
            <img src={visa} alt="visa" className="w-14 h-14" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FootLinks() {
  return (
    <div className="flex items-start justify-between">
      {foot_links.map(({ title, links }, index) => (
        <div key={index}>
          <h2 className="text-[1.2rem] font-bold uppercase">{title}</h2>
          <div className="flex flex-col gap-y-3 mt-[1.13rem]">
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

function NewsLetter() {
  return (
    <div className="bg-black flex flex-col tablet:flex-row items-center justify-between text-white pt-14 pb-16 pl-5 pr-7 tablet:pl-10 tablet:pr-14 gap-[1.86rem]">
      {/*  */}
      <div className="flex gap-x-[1.86rem] justify-between items-center">
        <img src={send} alt="send" className="w-14 h-14" />
        <div className="">
          <h2 className="text-2xl font-semibold">Signup for our Newsletter</h2>
          <p className="text-[0.9rem] mt-2">
            Recieve a direct message from us on our latest trends.
          </p>
        </div>
      </div>

      <div className="flex bg-white w-[24.8rem] max-h-12 rounded-md pl-2">
        <input
          type="text"
          placeholder="Your email address..."
          className="flex-1  text-black bg-transparent outline-none text-xs font-medium"
        />
        <button className="bg-primary-500 p-[0.67rem] h-full rounded-r-md text-base font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
}
