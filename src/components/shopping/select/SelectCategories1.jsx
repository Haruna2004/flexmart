import { arrow_back, arrow_foward } from "../../../assets";
import { select_categories } from "../../../constants";
import CatItems from "./CatItems";
import { useRef } from "react";
function SelectCategories() {
  const scrollRef = useRef();

  function scroll(side) {
    let x = side == "right" ? 100 : -100;
    let y = 0;
    scrollRef.current.scrollBy(x, y);
  }
  const styles = {
    container:
      "flex items-center justify-between mt-7 px-0 tablet:px-0 gap-3 relative group",
    arrowBack:
      "bg-[#D9D9D9] hidden group-hover:flex items-center justify-center rounded-full w-8 h-8 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 ml-6",
    itemsContainer:
      "flex items-center justify-center  gap-7 w-full h-auto overflow-x-scroll overflow-y-hidden flex-nowrap scroll-smooth scrollbar-none transition duration-300 ease-in-out",
    arrowFoward:
      "bg-[#D9D9D9] hidden group-hover:flex items-center justify-center rounded-full w-8 h-8 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 mr-6",
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowBack} onClick={() => scroll("left")}>
        <img src={arrow_back} alt="back" className="w-3/4 h-3/4" />
      </div>
      {/* items */}
      <div className={styles.itemsContainer} ref={scrollRef}>
        {select_categories.map(({ title, image }) => (
          <CatItems key={title} title={title} imgSrc={image} />
        ))}
      </div>
      <div className={styles.arrowFoward} onClick={() => scroll("right")}>
        <img src={arrow_foward} alt="foward" className="w-3/4 h-3/4" />
      </div>
    </div>
  );
}

export default SelectCategories;
