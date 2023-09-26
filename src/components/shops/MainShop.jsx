import SideAdvert from "../shopping/side/SideAdvert";
import Hero from "../shopping/hero/Hero";
import SelectCategories from "../shopping/select/SelectCategories";
import ShopSection from "../shopping/shop/ShopSection";

function MainShop() {
  return (
    <div className="flex tablet:px-7 md:px-14  tablet:py-4 md:py-8 gap-8 w-full bg-[#F6F1F1]">
      {/* Side Advert */}
      <SideAdvert />
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
