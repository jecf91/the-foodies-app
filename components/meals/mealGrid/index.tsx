import { IMeal } from "@/models";
import classes from "./mealGird.module.css";
import MealItem from "../mealItem";

interface MealsGirdProps {
  meals: IMeal[];
}

export default function MealsGrid({ meals }: MealsGirdProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
