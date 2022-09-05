import React from 'react'
import { useNavigate } from "react-router-dom";
import './Forms.css'

export default function Register(props) {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;
        if (password !== confirmPass){
            props.flashMessage('Passwords do not match', 'danger', 'info-fill')
        } else {
            console.log('Passwords match!')
        }

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let formData = JSON.stringify({
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value
        })

        fetch("https://kekambas-blog.herokuapp.com/auth/users", {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    props.flashMessage('This username and/or email already exists', 'warning')
                } else {
                    props.flashMessage('You have successfully registered!', 'success')
                }
            })
        event.target.email.value = '';
        event.target.username.value = '';
        event.target.password.value = '';
        event.target.confirmPass.value = '';

    }

    return (
        <>
            <h2 className="text-center my-3 fw-bold forms-title">Register</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12 w-75 mx-auto">
                    <label htmlFor="email" className="form-label fs-4 fw-bold forms-subtitle">Email</label>
                    <input type="text" className="form-control forms-fields" id="email" name="email" placeholder="Enter Email" />
                </div>
                <div className="col-md-12 w-75 mx-auto">
                    <label htmlFor="username" className="form-label fs-4 fw-bold forms-subtitle">Username</label>
                    <input type="text" className="form-control forms-fields" id="username" placeholder='Enter Username'/>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='col-4 me-5'>
                        <label htmlFor="password" className="form-label fs-4 fw-bold forms-subtitle">Password</label>
                        <input type="password" className="form-control forms-fields" id="password" placeholder="Enter Password" />
                    </div>
                    <div className='col-4 ms-5'>
                        <label htmlFor="confirmPass" className="form-label fs-4 fw-bold forms-subtitle">Confirm Password</label>
                        <input type="password" className="form-control forms-fields" id="confirmPass" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <button type="submit" className="btn fw-bold form-button">Register</button>
                </div>
            </form>
        </>
    )
}
