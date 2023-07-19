import classes from "./Cart.module.css";
import Model from "../UI/Model";
import cartContext from "../../store/cartContext";
import { useContext } from "react";

const cartItems = [{ id: "c1", name: "Venky", amount: "3", price: "160" }];

const Cart = (props) => {
  const closeCartHandler = () => {
    props.onCartClose();
  };

  const cart = useContext(cartContext);
  const totalAmount = cart.items.reduce((cur, next) => {
    return cur + parseInt(next.price);
  }, 0);
  cart.totalAmount = totalAmount;
  console.log(cart);
  return (
    <Model onCloseCart={props.onCartClose}>
      <ul className={classes["cart-items"]}>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name}-{item.amount}
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
