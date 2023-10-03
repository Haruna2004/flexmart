import { useEffect, useRef, useState } from "react";
import { select_categories } from "../../constants";
const items = [
  [0, 1],
  [2, 3],
  [4, 5],
];
function Carousel() {
  let currentItemsIndex = useRef(0);
  const [currentItems, setCurrentItems] = useState([0, 1]);

  // implement carousel autoplay
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentItems(items[currentItemsIndex.current]);
        // if currentItems is at the end
        if (currentItemsIndex.current === items.length - 1) {
          currentItemsIndex.current = 0;
        } else {
          currentItemsIndex.current++;
        }
      }, 3000);
      // Clearing the interval
      return () => clearInterval(interval);
    }
  }, [currentItems, autoplay]);

  // go to items
  function goTo(indices) {
    setCurrentItems(indices);
    // switch autoplay
    setAutoplay(false);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-auto flex justify-center gap-4">
        {currentItems.map((idx) => (
          <img
            key={idx}
            src={select_categories[idx].image}
            alt=""
            className="border border-purple-300 last:hidden tablet:last:flex"
          />
        ))}
      </div>

      <div className="flex justify-between gap-3 w-[5.7rem] h-[0.38rem] rounded-xl mt-5 cursor-pointer">
        {items.map((idx) => (
          <div
            key={idx[0]}
            className="bg-primary-500 w-1/3 rounded-xl"
            onClick={() => goTo(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

// Auto play on/off for inifinite carousel
// When items is clicked stop autoplay
// when position tracker is click turn on autoplay
