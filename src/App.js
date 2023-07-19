import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOpen(true);
  };
  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <Header onCartOpen={cartOpenHandler} />
      <main>
        <Meals />
        {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
      </main>
    </>
  );
}

export default App;
