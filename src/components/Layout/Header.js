import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>React Meals</h1>
      <div className={classes.cart_container}>
        <h2>Your Cart</h2>
        <button className={classes.cart_count_button}>0</button>
      </div>
    </div>
  );
};

export default Header;
