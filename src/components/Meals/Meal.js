import classes from "./Meal.module.css";

const Meal = (props) => {
  const { name, description, price } = props.meal;
  return (
    <div className={classes.meal}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <hr />
    </div>
  );
};

export default Meal;
