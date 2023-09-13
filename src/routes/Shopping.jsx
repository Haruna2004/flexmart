import SideAdvert from "../components/shopping/SideAdvert";
// import Header from "../components/shopping/header/Header";
import Hero from "../components/shopping/hero/Hero";

function Shopping() {
  return (
    <div className="w-100% h-screen font-poppins">
      {/* Header */}
      {/* <Header /> */}

      <div className="flex px-14 py-8 justify-between gap-8">
        {/* Side Advert */}
        <SideAdvert />
        <div className="flex flex-col">
          {/* body */}
          <Hero />
          {/* <div>Flash Sales</div>
          <div>Trending</div> */}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Shopping;
