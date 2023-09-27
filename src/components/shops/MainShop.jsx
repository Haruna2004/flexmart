import SideAdvert from "../shopping/side/SideAdvert";
import Hero from "../shopping/hero/Hero";
import SelectCategories from "../shopping/select/SelectCategories";
import ShopSection from "../shopping/shop/ShopSection";

function MainShop({ openSide }) {
  return (
    <div className="flex tablet:px-7 xl:px-8  tablet:py-4 xl:py-8 gap-8 w-full bg-[#F6F1F1]">
      {/* Side Advert */}
      <SideAdvert openSide={openSide} />
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        {/* body */}
        <Hero />
        <SelectCategories />
        <ShopSection />
      </div>
    </div>
  );
}

export default MainShop;
