import React from 'react'
import { useState, useEffect } from 'react'

export default function Card({title, content, id}) {

    const handleTitleClick = (id) => {

    }

    return (
            <div className="card mb-3 w-50 mx-auto">
                <img src={content} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" onClick={() => handleTitleClick(id)}>{title}</h5>
                </div>
            </div>
    )
}
