import React from 'react'
import TitleWordClick from './TitleWordClick'

export default function WordCard(props) {
    console.log(props)
    return (
        <div className="card">
            <TitleWordClick id={props.id} title={props.title} content={props.content} author={props.author} />
            <div className="card-body">
                <h5 className="card-title">{props.content}</h5>
                <p className="card-text">Post by: {props.author}</p>
            </div>
        </div>
    )
}
