import React from 'react'
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'
import './EditButton.css';

export default function EditButton({id, title, content}) {
    let navigate = useNavigate();
    console.log(id, 'test from EditButton')

    return (
        <button className="button btn btn-sm me-2 fw-bold" onClick={() => (navigate('/editForm', { state: {id: id, title: title, content: content}}))}>Edit</button>
    )
}
