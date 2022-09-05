import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function EditedPost() {
    const { state } = useLocation();
    console.log(state)



    return (
        <>
                <div className="card mb-3 w-50 mx-auto">
                    <img src="" className="card-img-top" alt="Edited" />
                    <div className="card-body">
                        <h5>Title</h5>
                    </div>
                </div>
            </>
    )
}
