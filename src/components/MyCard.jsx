import React from 'react'
import { useState, useEffect } from 'react'
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { navigate, useNavigate } from 'react-router-dom';
import TitleClick from './TitleClick';

export default function MyCard({content, id, loggedIn, setBlogs, title}) {
    let navigate = useNavigate();

    return (
        <>
            <div className="card mb-3 w-50 mx-auto">
                <img src={content} className="card-img-top" alt="..." />
                <div className="card-body">
                    <TitleClick id={id} title={title} content={content} />
                    {loggedIn && <EditButton id={id} title={title} content={content} />}
                    {loggedIn && <DeleteButton id={id} setBlogs={setBlogs} />}
                </div>
            </div>
        </>
    )
}
