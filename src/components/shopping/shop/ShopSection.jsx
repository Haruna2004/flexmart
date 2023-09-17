import FlashSales from "./FlashSales";
import ShopHeader from "./ShopHeader";
import ItemsSection from "./ItemsSection";
import NewItems from "./NewItems";

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
        <ItemsSection />
      </div>
      {/* Limited Stock deal */}
      <div>
        <ShopHeader text={"Limited Stock Deals"} bottomLine />
        <ItemsSection />
      </div>
      {/* New Items */}
      <div>
        <ShopHeader text={"New Items"} bottomLine />
        <NewItems />
      </div>
    </div>
  );
}

export default ShopSection;
