import Footer from "../components/shopping/footer/Footer";
import Header from "../components/shopping/header/Header";
import MiniShop from "../components/shops/MiniShop";
// import MainShop from "../components/shops/MainShop";

function Shopping() {
  const shop_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="w-full h-full min-h-screen font-poppins relative">
      {/* Header */}
      <Header />
      {/* <MainShop /> */}
      <MiniShop isFlash title={"Flash Sales"} shopItems={shop_items} />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Shopping;
