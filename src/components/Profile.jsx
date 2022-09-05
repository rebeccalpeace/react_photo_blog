import React from 'react'
import { useState, useEffect } from 'react';
import Login from './Login';
import MyCard from './MyCard';

export default function Profile(props) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts`)
            .then(res => res.json())
            .then(data => {
                console.log("test from false useEffect")
                setBlogs(data)
                console.log(blogs)
            })
    }, []);

    let myBlogs = []

    for (let i in blogs){
        if (blogs[i]['author']['username'] === props.username){
            myBlogs.push(blogs[i])
        }
    }
    

    return (
        <>
            {myBlogs.map((blog, i) => 
            {return <MyCard key={i} title={blog['title']} content={blog['content']} id={blog['id']} loggedIn={props.loggedIn} setBlogs={setBlogs} />})}
        </>
    )
}
