import React from 'react'
import { useState, useEffect } from 'react'
import DeleteButton from './DeleteButton';

export default function Card(props) {
    console.log(props)
    

    return (
            <div className="card mb-3 w-50 mx-auto">
                <img src={props.content} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" >{props.title}</h5>
                    {props.loggedIn && <DeleteButton id={props.id}/>}
                </div>
            </div>
    )
}
