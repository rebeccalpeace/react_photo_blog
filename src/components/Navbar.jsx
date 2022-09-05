import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {

    let navbarShown;

    if (props.loggedIn === true){
        navbarShown = 
        <div className="navbar-nav">
            <Link className="blog-links mt-auto mx-2" to="/profile">My Posts</Link>
            <Link className="blog-links mt-auto mx-2" to="/create">Create Post</Link>
            <Link className="blog-links mt-auto mx-2" to="/view">View All Posts</Link>
            <Link className="blog-links mt-auto mx-2" to="/" onClick={props.logout}>Logout</Link>
        </div>
    } else {
        navbarShown = 
        <div className="navbar-nav">
            <Link className="blog-links mt-auto mx-2" to="/">Home</Link>
            <Link className="blog-links mt-auto mx-2" to="/register">Register</Link>
            <Link className="blog-links mt-auto mx-2" to="/login">Login</Link>
            <Link className="blog-links mt-auto mx-2" to="/view">View All Posts</Link>
        </div>
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark mb-5 navbar-color fw-bold">
                <div className="container-fluid">
                    <a className="blog-title mx-3" href="/">MyCatBlog</a>
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
