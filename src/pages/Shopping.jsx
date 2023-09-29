import { useState } from "react";
import Footer from "../components/shopping/footer/Footer";
import Header from "../components/shopping/header/Header";
import Sidebar from "../components/shopping/side/Sidebar";
import MiniShop from "../components/shops/MiniShop";
import MainShop from "../components/shops/MainShop";
import { Route, Routes } from "react-router-dom";

function Shopping() {
  const [openSide, setOpenSide] = useState(false);
  const shop_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="relative h-full  min-h-screen w-full font-poppins ">
      {/* Header */}
      <Header setOpenSide={setOpenSide} />
      {/* sidebar-mobile */}
      <Sidebar openSide={openSide} setOpenSide={setOpenSide} />
      {/* <MainShop openSide={openSide} /> */}
      <Routes>
        <Route path="/" element={<MainShop openSide={openSide} />} />
        <Route
          path="/flash-sales"
          element={
            <MiniShop isFlash title={"Flash Sales"} shopItems={shop_items} />
          }
        />
        <Route
          path="/trending-items"
          element={
            <MiniShop isFlash title={"Trending Items"} shopItems={shop_items} />
          }
        />
        <Route
          path="/limited-stocks"
          element={
            <MiniShop
              isFlash
              title={"Limited Stocks Deal"}
              shopItems={shop_items}
            />
          }
        />
        <Route
          path="/new-items"
          element={
            <MiniShop isFlash title={"New Items"} shopItems={shop_items} />
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Shopping;

// function MiniShops() {
//     const shop_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//   return (
//     <Routes>
//       <Route path="/flash-sales" element={<MiniShop isFlash title={"Flash Sales"} shopItems={shop_items} />} />
//       <Route path="/trending-items" element={<MiniShop isFlash title={"Trending Items"} shopItems={shop_items} />} />
//       <Route path="/limited-stocks" element={<MiniShop isFlash title={"Limited Stocks Deal"} shopItems={shop_items} />} />
//       <Route path="/new-items" element={<MiniShop isFlash title={"New Items"} shopItems={shop_items} />} />
//     </Routes>
//   )
// }
