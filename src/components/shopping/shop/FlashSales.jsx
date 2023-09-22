import { flash_iphone } from "../../../assets";

function FlashSales() {
  return (
    <div className="flex flex-col items-center mt-7">
      {/* items */}
      <div className="flex justify-center sm:justify-between shadow border">
        {[0].map((idx) => (
          <div key={idx} className="flex w-full">
            <FlashSalesImage />
            <FlashSalesDetails />
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-between gap-3 w-[5.7rem] h-[0.38rem] rounded-xl mt-5 cursor-pointer">
        <div className="bg-primary-500 w-1/3 rounded-xl"></div>
        <div className="bg-[#D9D9D9] w-1/3 rounded-xl"></div>
        <div className="bg-[#D9D9D9] w-1/3 rounded-xl"></div>
      </div>
      {/* supreme image */}
      <div
        className="w-full h-36 mt-7 flex items-center justify-center rounded-sm bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(src/assets/flash-sales/supreme.png)`,
        }}
      >
        <div className="text-white inline-flex flex-col items-center">
          <div className="bg-[#F51616] rounded-sm p-[0.4rem] text-xs italic">
            Supreme
          </div>
          <p className="text-xs text-center">
            Building brands in culture. Building culture in brands.
          </p>
        </div>
      </div>
    </div>
  );
}

// Image
function FlashSalesImage() {
  return (
    <div className="px-[0.8rem] pt-8 pb-8">
      <div className="relative  w-fit">
        <img src={flash_iphone} alt="phone" className="w-32 h-40" />
        <div
          className="absolute top-0 right-0 rounded-full bg-primary-500 text-white text-[0.6rem] font-bold h-8 w-8 
            grid place-content-center"
        >
          -10%
        </div>
      </div>
    </div>
  );
}

// Details
function FlashSalesDetails() {
  return (
    <div className="px-[0.9rem] pt-10 pb-8 bg-white">
      <h3 className="text-[1em] font-bold">Iphone 14 pro max</h3>
      <h2>
        <span className="text-[1em] font-bold text-primary-500">
          ₦ 390,000{" "}
        </span>
        <span className="text-[0.6rem] font-bold text-[#D9D9D9] line-through">
          ₦ 400,000
        </span>
      </h2>
      <div className="flex text-[0.56rem] justify-between">
        <p>
          <span>Available:</span>
          <span className="text-primary-500"> 15</span>
        </p>
        <p>
          <span>Sold:</span>
          <span className="text-primary-500"> 50</span>
        </p>
      </div>
      {/* progress bar */}
      <div className="bg-[#D9D9D9] w-full rounded-xl h-[0.6rem]">
        <div className="bg-primary-500 w-1/3 rounded-l-xl h-[0.6rem]"></div>
      </div>
      {/* time */}
      <div className="flex justify-between mt-4">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full bg-[#D9D9D9]  h-6 w-7 grid place-content-center">
              <p className="font-extrabold text-[0.56rem]">365</p>
            </div>
            <p className="text-[0.56rem]">Days</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSales;
