import Header from "./components/Layouts/Header";
import ActivityTab from "./components/ActivityTab";
import AvailableProduct from "./components/ProductList/AvailableProducts";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <ActivityTab />
        <AvailableProduct />
      </main>
    </CartProvider>
  );
}

export default App;
