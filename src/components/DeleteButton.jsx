import React from 'react'
import { useState, useEffect } from 'react';

export default function DeleteButton({id}) {

    function handleDeleteClick(id){
        console.log(id)

        let token = localStorage.getItem('token')
        console.log(token)

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "Bearer " + token);
        myHeaders.append('Content-type', 'application/json');

        let raw = '';

        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`, {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    console.log(data)
                }
            })
    }

    return (
        <>
            <button className="btn btn-primary" onClick={() => handleDeleteClick(id)} >Delete</button>
        </>
    )
}
