import cn from "classnames";
import { flash_sales_items } from "../../../constants";
import { Banner, FlashSalesDetails, FlashSalesImage } from "./FlashSalesComp";
import { useRef, useState, useEffect } from "react";

const items = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function FlashSales() {
  const currentIndex = useRef(0);
  const [currentItems, setCurrentItems] = useState([0, 1]);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentItems(items[currentIndex.current]);
        // If currentIndex is at the end take it to start
        if (currentIndex.current === items.length - 1) {
          currentIndex.current = 0;
        } else {
          currentIndex.current++;
        }
      }, 1000);
      // Clearing the inverval
      return () => clearInterval(interval);
    }
  }, [currentItems, autoplay]);

  function goTo(indices) {
    setCurrentItems(indices);
    // Switch off autoplay
    setAutoplay(false);
  }

  return (
    <div className="mt-7 flex flex-col items-center">
      {/* items */}
      <div
        className="flex w-full items-center justify-center 
      border shadow  sm:justify-between"
      >
        {currentItems.map((currentItem) => (
          <div
            key={currentItem}
            className="flex w-full justify-center last:hidden tablet:last:flex"
          >
            <FlashSalesImage flash_item={flash_sales_items[currentItem]} />
            <FlashSalesDetails flash_item={flash_sales_items[currentItem]} />
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="mt-5 flex h-[0.38rem] w-[5.7rem] cursor-pointer justify-between gap-3 rounded-xl">
        {items.map((idx) => (
          <div
            key={idx}
            className={cn(
              "w-1/3 rounded-xl bg-[#d9d9d9] ",
              currentItems === idx && "bg-primary-500",
            )}
            onClick={() => goTo(idx)}
          ></div>
        ))}
      </div>

      {/* Banner - supreme image */}
      <Banner />
    </div>
  );
}

export default FlashSales;
