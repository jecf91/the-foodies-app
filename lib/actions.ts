"use server";

import { TSaveMeal } from "@/models";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

//SERVER ACTION - ONLY EXECUTED ON SERVER SIDE
export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as TSaveMeal;

  await saveMeal(meal);
  redirect("/meals");
}
