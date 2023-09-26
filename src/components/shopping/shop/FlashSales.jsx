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
    <div className="flex flex-col items-center mt-7">
      {/* items */}
      <div
        className="flex justify-center items-center sm:justify-between 
      shadow border  w-full"
      >
        {currentItems.map((currentItem) => (
          <div
            key={currentItem}
            className="flex justify-center w-full last:hidden tablet:last:flex"
          >
            <FlashSalesImage flash_item={flash_sales_items[currentItem]} />
            <FlashSalesDetails flash_item={flash_sales_items[currentItem]} />
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-between gap-3 w-[5.7rem] h-[0.38rem] rounded-xl mt-5 cursor-pointer">
        {items.map((idx) => (
          <div
            key={idx}
            className={cn(
              "bg-primary-500 w-1/3 rounded-xl",
              currentItems !== idx && "bg-[#d9d9d9]"
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
