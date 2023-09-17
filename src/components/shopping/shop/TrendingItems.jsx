import { star, wrist_watch } from "../../../assets";
import SectionImages from "./SectionImages";
function TrendingItems() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-x-[1.1rem] gap-y-[1.7rem] tablet:grid-cols-5">
        {[0].map((idx) => (
          <Item key={idx} />
        ))}
      </div>
      <SectionImages />
    </div>
  );
}

function Item() {
  return (
    <div className="flex flex-col items-center bg-[#EEE] py-[1.2rem]">
      <img src={wrist_watch} alt="item" className="w-[4.57rem] h-[6.6rem]" />
      <p className="text-[0.6rem] font-bold">Men&apos;s wrist watch</p>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((idx) => (
          <img key={idx} src={star} alt="star" className="w-3 h-3" />
        ))}
      </div>
      <h2 className="text-[0.9rem] font-medium text-primary-500">₦ 92,000</h2>
    </div>
  );
}

export default TrendingItems;
