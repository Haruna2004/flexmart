import SideAdvert from "../components/shopping/SideAdvert";
import Footer from "../components/shopping/footer/Footer";
// import Header from "../components/shopping/header/Header";
import Hero from "../components/shopping/hero/Hero";
import SelectCategories from "../components/shopping/select/SelectCategories";
import ShopSection from "../components/shopping/shop/ShopSection";

function Shopping() {
  return (
    <div className="w-full h-screen font-poppins">
      {/* Header */}
      {/* <Header /> */}

      <div className="flex tablet:px-7 md:px-14  tablet:py-4 md:py-8 gap-8 w-full bg-[#F6F1F1]">
        {/* Side Advert */}
        <SideAdvert />
        <div className="flex flex-col w-full ">
          {/* body */}
          <Hero />
          <SelectCategories />
          <ShopSection />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Shopping;
