import classes from "./Header.module.css";
import mealsImage from "../../asserts/meals_2.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="melas" />
      </div>
    </>
  );
};

export default Header;
