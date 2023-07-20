import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useState } from "react";
import cartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cart = useContext(cartContext);

  const cartHardler = () => {
    props.onCartOpen();
  };

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
