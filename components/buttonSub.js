'use client'
import { useFormStatus } from "react-dom"

export default function ButtonSub(params) {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending}>{pending ? 'Submitting...' : 'Share Meal'}</button>
    )
}