import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/getmeals'
import { Suspense } from 'react';

async function LoadMeals(params) {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default async function Meals(params) {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, Created {' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite reciepe and Cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}><Link href={"/meals/share"}>Share your fav reciepe</Link></p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                    <LoadMeals />
                </Suspense>
            </main>
        </>
    )
}