import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'

export default function CreatePost(props) {

    let navigate = useNavigate();

    if (props.loggedIn === false){
        props.flashMessage('You need to be logged in to create a post!', 'warning')
        navigate('/')
    }

    const handleSubmit = e => {
        e.preventDefault();

        let title = e.target.title.value;
        let url = e.target.url.value;

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

        fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage('You have created a post!', 'success')
                    navigate('/profile')
                }
            })

    }

    return (
        <>
            <h2 className="text-center my-3 fw-bold forms-title">Create a Post</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="title" className="form-label fs-4 fw-bold forms-subtitle">Title</label>
                    <input type="text" className="form-control forms-fields" id="title" name="title" placeholder="Enter Title" />
                </div>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="url" className="form-label fs-4 fw-bold forms-subtitle">URL</label>
                    <input type="text" className="form-control forms-fields" id="url" name="url" placeholder='Enter URL for image' />
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <button type="submit" className="btn fw-bold form-button">Submit</button>
                </div>
            </form>
        </>
    )
}
