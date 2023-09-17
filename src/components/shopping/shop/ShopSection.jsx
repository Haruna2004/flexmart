import FlashSales from "./FlashSales";
import ShopHeader from "./ShopHeader";
import TrendingItems from "./TrendingItems";

function ShopSection() {
  return (
    <div className="flex flex-col gap-7 w-full mt-7 px-4 tablet:px-0">
      {/* FlashSales */}
      <div>
        <ShopHeader text={"Flash Sales"} />
        <FlashSales />
      </div>
      {/* Trending Items */}
      <div>
        <ShopHeader text={"Trending Items"} bottomLine />
        <TrendingItems />
      </div>
    </div>
  );
}

export default ShopSection;
