import Link from "next/link";
import classes from "./meals.module.css";
import MealsGrid from "@/components/meals/mealGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoader from "./mealsLoader";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, createad{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoader />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
