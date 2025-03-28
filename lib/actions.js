'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./getmeals"

function isInvalidText(text) {
  return !text && text.trim() === '';
}
export async function shareMeal(prevState, formData) {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email")
    }
    // console.log('meal=', meal);
    if (
      isInvalidText(meal.title) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) ||
      isInvalidText(meal.creator) ||
      isInvalidText(meal.creator_email)
      ) {
      return {
        message: "invalid input!"
      }
    }
    await saveMeal(meal);
    redirect('/meals')

}