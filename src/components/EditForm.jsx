import React from 'react'
import { useState, useEffect } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import './Forms.css';


export default function EditForm() {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log(state)

    const handleEditSubmit = e => {
        e.preventDefault();

        let title = e.target.title.value;
        let url = e.target.url.value;
        let id = state.id

        console.log(title)
        console.log(url)

        let token = localStorage.getItem('token')
        console.log(token)

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "Bearer " + token);
        myHeaders.append('Content-type', 'application/json');

        let formData = JSON.stringify({
            title: e.target.title.value,
            content: e.target.url.value
        })

        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`, {
                method: 'PUT',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        console.error(data.error)
                    } else {
                        console.log(data)
                        navigate('/profile')
                    }
                })
    }

    return (
        <>
            <h2 className="text-center my-3 fw-bold forms-title">Edit Post</h2>
            <form action="" onSubmit={handleEditSubmit}>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="title" className="form-label fs-4 fw-bold forms-subtitle">Title</label>
                    <input type="text" className="form-control forms-fields" id="title" name="title" placeholder={state.title} />
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="url" className="form-label fs-4 fw-bold forms-subtitle">URL</label>
                    <input type="text" className="form-control forms-fields" id="url" name="url" placeholder={state.content} />
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <button type="submit" className="btn fw-bold form-button" >Submit</button>
                </div>
            </form>
        </>
    )
}
