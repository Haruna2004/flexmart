import { flash_sales_items } from "../../../constants";
import { Banner, FlashSalesDetails, FlashSalesImage } from "./FlashSalesComp";
// import Carousel from "../../test/Carousel";
function FlashSales() {
  const flash_item = flash_sales_items[1];
  return (
    <div className="flex flex-col items-center mt-7">
      {/* <Carousel /> */}
      {/* items */}
      <div
        className="flex justify-center items-center sm:justify-between 
      shadow border  w-full"
      >
        {/* {[0].map((idx) => ( */}
        <div className="flex justify-center w-full  ">
          <FlashSalesImage flash_item={flash_item} />
          <FlashSalesDetails flash_item={flash_item} />
        </div>
        {/* ))} */}
      </div>
      {/* pagination */}
      <div className="flex justify-between gap-3 w-[5.7rem] h-[0.38rem] rounded-xl mt-5 cursor-pointer">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="bg-primary-500 w-1/3 rounded-xl"></div>
        ))}
      </div>
      {/* Banner - supreme image */}
      <Banner />
    </div>
  );
}

export default FlashSales;
