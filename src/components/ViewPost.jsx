import React from 'react'

export default function ViewPost(props) {
    return (
        <div className="card mb-3 w-50 mx-auto">
            <img src={props.content} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" title={props.title} content={props.content} >{props.title}</h5>
            </div>
        </div>
    )
}
