import FlashSales from "./FlashSales";
import ShopHeader from "./ShopHeader";
import ItemsSection from "./ItemsSection";
import NewItems from "./NewItems";
import { Link } from "react-router-dom";

function ShopSection() {
  return (
    <div className="mt-7 flex w-full flex-col gap-7 px-4 tablet:px-0 ">
      {/* FlashSales */}
      <Link to="/flash-sales">
        <ShopHeader text={"Flash Sales"} />
        <FlashSales />
      </Link>
      {/* Trending Items */}
      <Link to="/trending-items">
        <ShopHeader text={"Trending Items"} bottomLine />
        <ItemsSection />
      </Link>
      {/* Limited Stock deal */}
      <Link to="/limited-stocks">
        <ShopHeader text={"Limited Stock Deals"} bottomLine />
        <ItemsSection />
      </Link>
      {/* New Items */}
      <Link to="/new-items">
        <ShopHeader text={"New Items"} bottomLine />
        <NewItems />
      </Link>
    </div>
  );
}

export default ShopSection;
