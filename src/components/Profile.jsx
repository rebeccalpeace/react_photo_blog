import React from 'react'
import { useState, useEffect } from 'react';
import Login from './Login';
import Card from './Card';

export default function Profile(props) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://kekambas-blog.herokuapp.com/blog/posts")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, []);
    
    console.log(props.username)

    let myBlogs = []
    for (let i in blogs){
        if (blogs[i]['author']['username'] === props.username){
            myBlogs.push(blogs[i])
        }
    }
    console.log(myBlogs, 'test')

    // let homePage;

    // if (props.loggedIn === true){
    //     homePage = 
    // } else {
    //     homePage = <h1>Home page if not logged in</h1>
    // }


    return (
        <>
            {myBlogs.map((blog, i) => <Card title={blog['title']} content={blog['content']} />)}
        </>
    )
}
