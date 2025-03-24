'use client'
export default function Error({error}) {
    console.log('error==>', error);
    return (
        <main className="error">
            <h1>An Error Occured..</h1>
            <p>failed to fetch data! Please Try Again.</p>
        </main>
    )
}