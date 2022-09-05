import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleWordPost() {
    const { state } = useLocation();
    console.log(state.id, state.title, state.content, 'TEST')

    return (
        <>
            <div className="card">
                <h5>{state.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{state.content}</h5>
                    <p className="card-text">Post by: {state.author}</p>
                </div>
            </div>
        </>
    )
}