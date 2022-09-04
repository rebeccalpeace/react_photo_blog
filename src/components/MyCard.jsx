import React from 'react'
import { useState, useEffect } from 'react'
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { navigate, useNavigate } from 'react-router-dom';
import TitleClick from './TitleClick';

export default function MyCard({content, id, loggedIn, setBlogs, setSinglePost, title, setPostId, fetchSinglePost, setFetchSinglePost}) {
    let navigate = useNavigate();

    // function useViewPost() {
    //     const [newPost, setNewPost] = useState(null);

    // const handleTitleClick = (id) => {
    //     // setPostId to id of clicked card
    //     setPostId(id)
    //     console.log(id, "test for myCard for ID")
    //     setFetchSinglePost(true)
    // }
    //     useEffect(() => {
    //         fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setSinglePost(data)
    //             })
    //     }, []);
    //     return {
    //         handleTitleClick
    //     }
        
    // };

    // const { handleTitleClick } = useViewPost();

    // useEffect(() => {
    //     if (newPost){
    //         setSinglePost(newPost)
    //     }
    // }, [newPost])


    return (
        <>
            <div className="card mb-3 w-50 mx-auto">
                <img src={content} className="card-img-top" alt="..." />
                <div className="card-body">
                    <TitleClick id={id} title={title} setBlogs={setBlogs} setPostId={setPostId} fetchSinglePost={fetchSinglePost} setFetchSinglePost={setFetchSinglePost} />
                    {loggedIn && <EditButton id={id} setBlogs={setBlogs} />}
                    {loggedIn && <DeleteButton id={id} setBlogs={setBlogs} />}
                </div>
            </div>
        </>
    )
}
