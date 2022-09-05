import React from 'react'
import { useState, useEffect } from 'react'
import TitleClick from './TitleClick'

export default function Card({title, content, id}) {

    return (
            <div className="card mb-3 w-50 mx-auto">
                <img src={content} className="card-img-top" alt="..." />
                <div className="card-body">
                    <TitleClick id={id} title={title} content={content} />
                </div>
            </div>
    )
}
