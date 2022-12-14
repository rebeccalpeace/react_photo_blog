import React from 'react'
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './WordPost.css';

export default function TitleWordClick({id, title, content, author}) {
    let navigate = useNavigate();

    return (
        <h5 className="card-title black-title py-3 ps-3" onClick={() => (navigate('/singleWordPost', { state: {id: id, title: title, content: content, author: author}}))}>{title}</h5>
    )
}
