import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { error } from 'node:console'

const db = sql('meals.db')

export async function getMeals() {
   //added delay of 3 sec for fetch call feal
   await new Promise((resolve)=>setTimeout(resolve, 3000))
   // uncomment to see Error page
   // throw Error("failed to fetch data.")
   return db.prepare('SELECT * FROM meals').all()
}
export function getMeal(slug) {
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
   meal.slug = slugify(meal.title, {lower:true})
   meal.instruction = xss(meal.instruction)
   const extension = meal.image.name.split('.').pop();
   const fileName = `${meal.slug}.${extension}`

   const fileStream = fs.createWriteStream(`public/images/${fileName}`)
   const bufferedImage = await meal.image.arrayBuffer();

   fileStream.write(Buffer.from(bufferedImage), (error)=>{
      if (error) {
         throw new Error('Saving Image Failed!');
      }
   });
   meal.image = `/images/${fileName}`

   db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
   VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
   )
   `).run(meal);
}