import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditButton({id, setBlogs}) {

    let navigate = useNavigate();

    function useEditPost() {

        // const handleEditClick = (id) => {
        //     console.log(id)
        // }


    }
   


    return (
        <button className="btn btn-primary" /*onClick={() => handleEditClick(id)}*/ >Edit</button>
    )
}
