import React from 'react'
import { useState, useEffect } from 'react'; 

export default function TitleClick({id, title, setBlogs, setPostId, fetchSinglePost, setFetchSinglePost}) {

    function useTitleClick() {
        const [newPost, setNewPost] = useState(null)
        

        const handleTitleClick = (id) => {
            console.log('click test')
            setFetchSinglePost(true)
            setPostId(id)
        }

        return {
            handleTitleClick
        }
    };

    const {handleTitleClick} = useTitleClick();

    return (
        <h5 className="card-title" onClick={() => handleTitleClick(id)}>{title}</h5>
    )
}
