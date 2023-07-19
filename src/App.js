import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
        <Cart />
      </main>
    </>
  );
}

export default App;
