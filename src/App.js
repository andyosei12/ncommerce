import { useState } from "react";

import Header from "./components/Layouts/Header";
import ActivityTab from "./components/ActivityTab";
import AvailableProduct from "./components/ProductList/AvailableProducts";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <ActivityTab />
        <AvailableProduct />
      </main>
    </CartProvider>
  );
}

export default App;
