import React from 'react'
import { useState, useEffect } from 'react';

export default function DeleteButton({id, setBlogs}) {

    function useDeletePost() {
        const [shouldRefetchBlogs, setShouldRefetchBlogs] = useState(false)
        const [deleteError, setDeleteError] = useState(false)
        const [newBlogs, setNewBlogs] = useState(null)

        const handleDeleteClick = (id) => {
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
                        setDeleteError(true)
                    } else {
                        console.log(data)
                        setShouldRefetchBlogs(true)
                    }
                })
        }

        useEffect(() => {
            if (shouldRefetchBlogs){
                fetch("https://kekambas-blog.herokuapp.com/blog/posts")
                    .then(res => res.json())
                    .then(data => {
                        if (data.error){
                            console.error(data.error)
                        } else {
                            setNewBlogs(data)
                        }
                })
            }
            setShouldRefetchBlogs(false)
        }, [shouldRefetchBlogs]);

        return {
            handleDeleteClick,
            error: deleteError,
            newBlogs
        }
    };

    const {handleDeleteClick, error, newBlogs} = useDeletePost();

    handleDeleteClick({id})

    useEffect(() => {
        if (newBlogs){
            setBlogs(newBlogs)
        }
    }, [newBlogs])
    
    return (
        <>
            <button className="btn btn-primary" onClick={() => handleDeleteClick(id)} >Delete</button>
        </>
    )
}
