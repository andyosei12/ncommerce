import { Fragment } from "react";
import Header from "./components/Layouts/Header";
import ActivityTab from "./components/ActivityTab";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ActivityTab />
      </main>
    </Fragment>
  );
}

export default App;
