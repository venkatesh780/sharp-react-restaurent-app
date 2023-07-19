import classes from "./Cart.module.css";
import Model from "../UI/Model";
const cartItems = [{ id: "c1", name: "Venky", amount: "3", price: "160" }];

const Cart = (props) => {
  const closeCartHandler = () => {
    props.onCartClose();
  };

  return (
    <Model>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.56</span>
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
