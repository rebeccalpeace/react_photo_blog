import React from 'react'
import { useState, useEffect } from 'react'
import TitleClick from './TitleClick'
import './MyCard.css';

export default function Card({title, content, id}) {

    return (
            <div className="card mt-5 w-50 mx-auto color-card">
                <img src={content} className="card-img-top" alt="..." />
                <div className="card-body title-card text-center">
                    <TitleClick id={id} title={title} content={content} />
                </div>
            </div>
    )
}
