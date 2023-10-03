// Image
import { supreme_img } from "../../../assets";
export function FlashSalesImage({ flash_item: { image, discount_percent } }) {
  return (
    <div className="px-[0.8rem] pb-8 pt-8">
      <div className="relative  w-fit">
        <img src={image} alt="item" className="h-auto w-32" />
        <div
          className="absolute right-0 top-0 grid h-8 w-8 place-content-center rounded-full bg-primary-500 text-[0.6rem] 
              font-bold text-white"
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
    <div className="bg-white px-[0.9rem] pb-8 pt-10 ">
      <h3 className="text-[1em] font-bold">{title}</h3>
      <h2>
        <span className="text-[1em] font-bold text-primary-500">
          ₦ {discount_price}{" "}
        </span>
        <span className="text-[0.6rem] font-bold text-[#D9D9D9] line-through">
          ₦ {full_price}
        </span>
      </h2>
      <div className="flex justify-between text-[0.56rem]">
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
      <div className="h-[0.6rem] w-full rounded-xl bg-[#D9D9D9]">
        <div className="h-[0.6rem] w-1/3 rounded-l-xl bg-primary-500"></div>
      </div>
      {/* time */}
      <div className="mt-4 flex justify-between">
        {time.map(({ id, value }) => (
          <div key={id} className="flex flex-col items-center">
            <div className="grid h-6 w-7 place-content-center rounded-full bg-[#D9D9D9]">
              <p className="text-[0.56rem] font-extrabold">{value}</p>
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
      className="mt-7 flex h-36 w-full items-center justify-center rounded-sm bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${supreme_img})`,
      }}
    >
      <div className="inline-flex flex-col items-center text-white">
        <div className="rounded-sm bg-[#F51616] p-[0.4rem] text-xs italic">
          Supreme
        </div>
        <p className="text-center text-xs">
          Building brands in culture. Building culture in brands.
        </p>
      </div>
    </div>
  );
}
