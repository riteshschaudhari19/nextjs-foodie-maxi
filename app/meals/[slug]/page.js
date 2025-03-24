
export default function DynamicPage(params) {
    return (
        <main>
            <h1>{params.params.slug}</h1>
        </main>
    )
}