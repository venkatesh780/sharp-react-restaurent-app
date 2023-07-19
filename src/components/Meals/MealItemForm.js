import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form>
      <div className={classes.meal_form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <button className={classes.meal_form_button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
