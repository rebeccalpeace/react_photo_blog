import React from 'react'

export default function WordCard(props) {
    return (
        <div class="card">
            <h5 class="card-header" onClick={props.handleClick}>{props.title}</h5>
            <div class="card-body">
                <h5 class="card-title">{props.content}</h5>
                <p class="card-text">Post by: {props.author}</p>
            </div>
        </div>
    )
}
