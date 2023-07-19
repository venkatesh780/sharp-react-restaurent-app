import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useContext } from "react";
import cartContext from "../../store/cartContext";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const { items } = useContext(cartContext);
  return (
    <section className={classes.meals_contianer}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem key={meal.id} meal={meal} />;
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
