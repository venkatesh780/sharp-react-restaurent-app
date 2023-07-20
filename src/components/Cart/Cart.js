import classes from "./Cart.module.css";
import Model from "../UI/Model";
import cartContext from "../../store/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const closeCartHandler = () => {
    props.onCartClose();
  };

  const cart = useContext(cartContext);
  const totalAmount = cart.items.reduce((cur, next) => {
    return cur + parseInt(next.price);
  }, 0);
  cart.totalAmount = totalAmount;

  return (
    <Model onCloseCart={props.onCartClose}>
      <ul className={classes["cart-items"]}>
        {cart.items.map((item) => (
          // <li key={item.id}>
          //   {item.name}-{item.amount}
          // </li>
          <CartItem key={item.id} item={item} />
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
