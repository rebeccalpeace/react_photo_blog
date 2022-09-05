import React from 'react'
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'

export default function EditButton({id, title, content}) {
    let navigate = useNavigate();
    console.log(id, 'test from EditButton')

    return (
        <button className="btn btn-primary" onClick={() => (navigate('/editForm', { state: {id: id, title: title, content: content}}))}>Edit</button>
    )
}
