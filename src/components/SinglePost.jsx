import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SinglePost() {
    const { state } = useLocation();
    console.log(state.id, state.title, state.content, 'TEST')

    return (
        <>
            <div className="card mb-5 w-50 mx-auto color-card">
                <img src={state.content} className="card-img-top" alt="..." />
                <div className="card-body title-card text-center">
                    <h5>{state.title}</h5>
                </div>
            </div>
        </>
    )
}
