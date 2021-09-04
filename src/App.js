import { Fragment } from "react";
import Header from "./components/Layouts/Header";
import ActivityTab from "./components/ActivityTab";
import AvailableProduct from "./components/ProductList/AvailableProducts";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ActivityTab />
        <AvailableProduct />
      </main>
    </Fragment>
  );
}

export default App;
