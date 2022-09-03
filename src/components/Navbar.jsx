import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    let navbarShown;

    if (props.loggedIn === true){
        navbarShown = 
        <div className="navbar-nav">
            <Link className="nav-link" to="/profile">Home</Link>
            <Link className="nav-link" to="/create">Create Post</Link>
            <Link className="nav-link" to="/view">View All Posts</Link>
            <Link className="nav-link" to="/" onClick={props.logout}>Logout</Link>
        </div>
    } else {
        navbarShown = 
        <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/view">View All Posts</Link>
        </div>
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyCatBlog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {navbarShown}
                    </div>
                </div>
            </nav>
        </>
    )
}
