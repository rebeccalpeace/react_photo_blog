import React from 'react'

export default function WordCard(props) {
    return (
        <div className="card">
            <h5 className="card-header" onClick={props.handleClick}>{props.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.content}</h5>
                <p className="card-text">Post by: {props.author}</p>
            </div>
        </div>
    )
}
