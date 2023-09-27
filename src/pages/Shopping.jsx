import { useState } from "react";
import Footer from "../components/shopping/footer/Footer";
import Header from "../components/shopping/header/Header";
import Sidebar from "../components/shopping/side/Sidebar";
// import MiniShop from "../components/shops/MiniShop";
import MainShop from "../components/shops/MainShop";

function Shopping() {
  const [openSide, setOpenSide] = useState(false);
  // const shop_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="w-full relative h-full min-h-screen font-poppins ">
      {/* Header */}
      <Header setOpenSide={setOpenSide} />
      {/* sidebar-mobile */}
      <Sidebar openSide={openSide} setOpenSide={setOpenSide} />
      <MainShop openSide={openSide} />
      {/* <MiniShop isFlash title={"Flash Sales"} shopItems={shop_items} /> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Shopping;
