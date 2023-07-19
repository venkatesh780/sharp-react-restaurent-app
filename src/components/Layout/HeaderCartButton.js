import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import cartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartHardler = () => {
    props.onCartOpen();
  };

  const cart = useContext(cartContext);

  const numberOfCartItems = cart.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={cartHardler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>
      <span className={classes.badge}>{cart.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
