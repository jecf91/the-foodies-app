import { IMeal, TSaveMeal } from "@/models";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  const getAllMeals = "SELECT * FROM meals";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare(getAllMeals).all() as IMeal[];
}

export async function getMeal(slug: string) {
  //PROTECTED FROM SQL INJECTION
  const getMeal = "SELECT * FROM meals WHERE slug = ?";
  return db.prepare(getMeal).get(slug) as IMeal;
}

export async function saveMeal(meal: TSaveMeal) {
  const { title, instructions, image, summary, creator, creator_email } = meal;
  const slug = slugify(title, { lower: true });
  //SANITIZE FOR XSS PROTECTION
  const sanitizeInstructions = xss(instructions);

  const extension = image.name.split(".").pop();
  const fileName = `${slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image failed!");
    }
  });
  const imagePath = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    values (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run({
    title,
    summary,
    instructions: sanitizeInstructions,
    creator,
    creator_email,
    image: imagePath,
    slug,
  });
}
