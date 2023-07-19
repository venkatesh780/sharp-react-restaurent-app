import { createContext } from "react";

const addItemToCart = (item) => {};
const removeItemFromCart = (id) => {};
const cartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemToCart,
  removeItem: removeItemFromCart,
});

export default cartContext;
