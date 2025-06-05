"use server";

import { TSaveMeal } from "@/models";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

//SERVER ACTION - ONLY EXECUTED ON SERVER SIDE
export async function shareMeal(
  prevState: { message: string | null },
  formData: FormData
) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as TSaveMeal;

  const invalidTitle = isInvalidText(meal.title);
  const invalidSummary = isInvalidText(meal.summary);
  const invalidInstructions = isInvalidText(meal.instructions);
  const invalidCreator = isInvalidText(meal.creator);
  const invalidCreatorEmail = isInvalidText(meal.creator_email);
  const isEmailNotValid = !meal.creator_email.includes("@");
  const hasNoImage = meal.image.size === 0;

  if (
    invalidTitle ||
    invalidSummary ||
    invalidInstructions ||
    invalidCreator ||
    invalidCreatorEmail ||
    isEmailNotValid ||
    hasNoImage
  ) {
    return {
      message: "invalid input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
