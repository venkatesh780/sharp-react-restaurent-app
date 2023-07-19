import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props.meal;
  return (
    <>
      <div className={classes.meal}>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>${price}</h3>
        </div>

        <div>
          <MealItemForm id={id} meal={props.meal} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
