import React from 'react'
import { useLocation } from 'react-router-dom'
import './WordPost.css';

export default function SingleWordPost() {
    const { state } = useLocation();
    console.log(state.id, state.title, state.content, 'TEST')

    return (
        <>
            <div className="card mt-5 w-75 mx-auto word-border">
                <h5 className="black-title py-3 ps-3">{state.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{state.content}</h5>
                    <p className="card-text">Post by: {state.author}</p>
                </div>
            </div>
        </>
    )
}