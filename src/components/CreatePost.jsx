import React from 'react'
import { useNavigate } from 'react-router-dom'

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
                    navigate('/')
                }
            })

    }

    return (
        <>
            <h2 className="text-center my-3">Create a Post</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL</label>
                    <input type="text" className="form-control" id="url" name="url" placeholder='Enter URL for image' />
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}
