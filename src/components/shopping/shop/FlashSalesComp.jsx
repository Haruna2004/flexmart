// Image
export function FlashSalesImage({ flash_item: { image, discount_percent } }) {
  return (
    <div className="px-[0.8rem] pt-8 pb-8">
      <div className="relative  w-fit">
        <img src={image} alt="item" className="w-32 h-auto" />
        <div
          className="absolute top-0 right-0 rounded-full bg-primary-500 text-white text-[0.6rem] font-bold h-8 w-8 
              grid place-content-center"
        >
          {discount_percent}
        </div>
      </div>
    </div>
  );
}

// Details
export function FlashSalesDetails({
  flash_item: { title, discount_price, full_price, available, sold, time },
}) {
  return (
    <div className="px-[0.9rem] pt-10 pb-8 bg-white ">
      <h3 className="text-[1em] font-bold">{title}</h3>
      <h2>
        <span className="text-[1em] font-bold text-primary-500">
          ₦ {discount_price}{" "}
        </span>
        <span className="text-[0.6rem] font-bold text-[#D9D9D9] line-through">
          ₦ {full_price}
        </span>
      </h2>
      <div className="flex text-[0.56rem] justify-between">
        <p>
          <span>Available:</span>
          <span className="text-primary-500"> {available}</span>
        </p>
        <p>
          <span>Sold:</span>
          <span className="text-primary-500"> {sold}</span>
        </p>
      </div>
      {/* progress bar */}
      <div className="bg-[#D9D9D9] w-full rounded-xl h-[0.6rem]">
        <div className="bg-primary-500 w-1/3 rounded-l-xl h-[0.6rem]"></div>
      </div>
      {/* time */}
      <div className="flex justify-between mt-4">
        {time.map(({ id, value }) => (
          <div key={id} className="flex flex-col items-center">
            <div className="rounded-full bg-[#D9D9D9] h-6 w-7 grid place-content-center">
              <p className="font-extrabold text-[0.56rem]">{value}</p>
            </div>
            <p className="text-[0.56rem] capitalize">{id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Banner
export function Banner() {
  return (
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
  );
}
