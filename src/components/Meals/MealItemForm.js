import classes from "./MealItemForm.module.css";
import { useContext, useRef } from "react";
import cartContext from "../../store/cartContext";

const MealItemForm = (props) => {
  const cart = useContext(cartContext);

  const inputRef = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    const id = props.id;
    const name = props.meal.name;
    const price = props.meal.price;

    const meal = {
      id,
      amount,
      name,
      price,
    };
    cart.items.push(meal);
  };

  return (
    <form>
      <div className={classes.meal_form}>
        <div className={classes.input}>
          <label htmlFor={"amount_" + props.id}>Amount</label>
          <input
            id={"amount_" + props.id}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
            ref={inputRef}
          />
        </div>
      </div>
      <button className={classes.meal_form_button} onClick={formHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
