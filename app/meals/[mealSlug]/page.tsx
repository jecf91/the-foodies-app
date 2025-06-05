import { getMeal } from "@/lib/meals";
import classes from "./mealDetails.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import xss from "xss";

interface MealsDetailsPageProps {
  params: Promise<{ mealSlug: string }>;
}

export async function generateMetadata({ params }: MealsDetailsPageProps) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealsDetailsPage({
  params,
}: MealsDetailsPageProps) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  const { image, title, creator, creator_email, summary, instructions } = meal;
  const preparedToRenderInstructions = instructions.replace(/\n/g, "<br/>");
  // NEEDS TO BE SANITIZED FOR SECURITY REASONS XSS */
  const sanitizedInstructions = xss(preparedToRenderInstructions);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: sanitizedInstructions }}
        />
      </main>
    </>
  );
}
