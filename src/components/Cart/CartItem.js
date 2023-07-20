import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const item = props.item;
  return (
    <>
      <div className={classes.cart_item_container}>
        <div className={classes.cart_item}>
          <div>
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
          </div>

          <div className={classes.amount}>
            <p>X {item.amount}</p>
          </div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.reduceCountBtn}>-</button>
          <button className={classes.increaseCountBtn}>+</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
