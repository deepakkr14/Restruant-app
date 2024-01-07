import { Fragment, useState } from "react";
import Header from "./Component/Layout/header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };
  const openCart = () => {
    setShowCart(true);
  };
  return (
    <Fragment>
      {showCart && <Cart onClosebtn={closeCart} />}
      <Header onShowbtn={openCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
