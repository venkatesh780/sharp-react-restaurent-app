import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState, useContext } from "react";
import cartContext from "./store/cartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useContext(cartContext);

  const cartOpenHandler = () => {
    setIsCartOpen(true);
  };
  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <cartContext.Provider value={cart}>
        {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
        <Header onCartOpen={cartOpenHandler} />
        <main>
          <Meals />
        </main>
      </cartContext.Provider>
    </>
  );
}

export default App;
