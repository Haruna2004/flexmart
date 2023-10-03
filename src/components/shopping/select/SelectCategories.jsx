import { arrow_back, arrow_foward } from "../../../assets";
import { select_categories } from "../../../constants";
import CatItems from "./CatItems";
import { useRef } from "react";
import cn from "classnames";
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
      "bg-[#D9D9D9] hidden group-hover:flex tablet:group-hover:hidden items-center justify-center rounded-full w-8 h-8 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 ml-6 transition-all duration-200 z-10",
    itemsContainer:
      "flex items-center pl-4 tablet:justify-center  gap-7 w-full h-auto overflow-x-scroll overflow-y-hidden flex-nowrap scroll-smooth scrollbar-none",
    arrowFoward:
      "bg-[#D9D9D9] hidden group-hover:flex tablet:group-hover:hidden  items-center justify-center rounded-full w-8 h-8 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 mr-6 transition-all duration-200 z-10",
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowBack} onClick={() => scroll("left")}>
        <img src={arrow_back} alt="back" className="w-3/4 h-3/4" />
      </div>
      {/* items */}
      <div
        className={cn(
          styles.itemsContainer,
          select_categories.length > 5 && "tablet:justify-start",
        )}
        ref={scrollRef}
      >
        {select_categories.map(({ title, image }, index) => (
          <CatItems key={index} title={title} imgSrc={image} />
        ))}
      </div>
      <div className={styles.arrowFoward} onClick={() => scroll("right")}>
        <img src={arrow_foward} alt="foward" className="w-3/4 h-3/4" />
      </div>
    </div>
  );
}

export default SelectCategories;
