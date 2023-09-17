import { arrow_back, arrow_foward } from "../../../assets";
import { select_categories } from "../../../constants";
import CatItems from "./CatItems";
function SelectCategories() {
  return (
    <div className="flex items-center justify-between mt-7 px-4 tablet:px-0 gap-3">
      <div className="bg-[#D9D9D9] flex items-center justify-center rounded-full w-8 h-8 cursor-pointer">
        <img src={arrow_back} alt="back" className="w-3/4 h-3/4" />
      </div>
      {/* items */}
      <div className="flex gap-7">
        {select_categories.map(({ title, image }) => (
          <CatItems key={title} title={title} imgSrc={image} />
        ))}
      </div>
      <div className="bg-[#D9D9D9] flex items-center justify-center rounded-full w-8 h-8 cursor-pointer">
        <img src={arrow_foward} alt="foward" className="w-3/4 h-3/4" />
      </div>
    </div>
  );
}

export default SelectCategories;
