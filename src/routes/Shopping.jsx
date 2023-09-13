import SideAdvert from "../components/shopping/SideAdvert";
// import Header from "../components/shopping/header/Header";
import Hero from "../components/shopping/hero/Hero";
import SelectCategories from "../components/shopping/select/SelectCategories";

function Shopping() {
  return (
    <div className="w-full h-screen font-poppins">
      {/* Header */}
      {/* <Header /> */}

      <div className="flex tablet:px-7 md:px-14  tablet:py-4 md:py-8 gap-8 w-full">
        {/* Side Advert */}
        <SideAdvert />
        <div className="flex flex-col w-full ">
          {/* body */}
          <Hero />
          <SelectCategories />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Shopping;
