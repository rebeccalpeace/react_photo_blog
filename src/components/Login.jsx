import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    let navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(event);

        let username = event.target.username.value;
        let password = event.target.password.value;

        console.log(username)
        console.log(btoa(`${username}:${password}`))

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "Basic " + btoa(`${username}:${password}`))

        let response = await fetch("https://kekambas-blog.herokuapp.com/auth/token", {
            method: 'POST',
            headers: myHeaders
        });

        if (response.ok){
            console.log('ok!')
            let data = await response.json();
        console.log(data)

        localStorage.setItem('token', data.token);
        // localStorage.setItem('expiration', data.token_expiration);

        props.login();

        props.flashMessage('You are logged in', 'success');
        navigate('/profile')
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger')
        }
        props.verifyUser(username)
    }

        

    return (
        <>
            <h2 className="text-center my-3">Login</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder='Enter Username'/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" />
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}
