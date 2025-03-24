import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
   //added delay of 3 sec for fetch call feal
   await new Promise((resolve)=>setTimeout(resolve, 3000))
   // uncomment to see Error page
   // throw Error("failed to fetch data.")
   return db.prepare('SELECT * FROM meals').all()
}