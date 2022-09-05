import React from 'react'
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function TitleClick({id, title, content}) {
    let navigate = useNavigate();


    return (
        <h5 className="card-title" onClick={() => (navigate('/singlePost', { state: {id: id, title: title, content: content}}))}>{title}</h5>
    )
}
