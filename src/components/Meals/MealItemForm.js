import classes from "./MealItemForm.module.css";
const MealItemForm = () => {
  return (
    <>
      <div className={classes.meal_form}>
        <h4>Amount</h4>
        <input type="number" />
      </div>
      <button className={classes.meal_form_button}>+ Add</button>
    </>
  );
};

export default MealItemForm;
