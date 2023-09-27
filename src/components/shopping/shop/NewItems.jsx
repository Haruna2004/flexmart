import { jacket, wrist_watch } from "../../../assets";

function NewItems() {
  return (
    <div className="flex gap-4 mt-7 items-center justify-evenly">
      {/* main item */}
      <div className="flex flex-col items-center px-1 pt-12 pb-2 text-[0.9rem] bg-[#EEE]">
        <img
          src={jacket}
          alt="item"
          className="w-[10rem] tablet:w-[15.4rem] h-auto"
        />
        <p className="mt-8">Men&apos;s leather jacket 2022</p>
        <h3 className=" text-primary-500 font-medium">₦ 136,000</h3>
      </div>
      {/* Items */}
      <div className="grid grid-cols-2 tablet:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
        {[0].map((idx) => (
          <NewItem key={idx} />
        ))}
      </div>
    </div>
  );
}

export default NewItems;

function NewItem() {
  return (
    <div className="flex flex-col items-center bg-[#EEE] py-[1.2rem]">
      <img src={wrist_watch} alt="item" className="w-[4.57rem] h-[6.6rem]" />
      <p className="text-[0.6rem]">Men&apos;s wrist watch</p>

      <h2 className="text-[0.9rem] font-medium text-primary-500">₦ 92,000</h2>
    </div>
  );
}
