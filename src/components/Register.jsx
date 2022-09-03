import React from 'react'
import { useNavigate } from "react-router-dom";

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
            <h2 className="text-center my-3">Register</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder='Enter Username'/>
                </div>
                <div className="col-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                </div>
                <div className="col-6">
                    <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPass" placeholder="Confirm Password" />
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    )
}
