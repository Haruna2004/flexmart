import { send } from "../../../assets";

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

      {/* Text input */}
      <div className="flex bg-white w-full max-w-[24.8rem] max-h-12 rounded-md pl-2">
        <input
          type="text"
          placeholder="Your email address..."
          className="flex-1  text-black bg-transparent outline-none text-xs font-medium"
        />
        <button className="bg-primary-500 p-[0.67rem] h-full rounded-r-md text-sm sm:text-base font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
