import React from 'react'
import { useState, useEffect } from 'react';
import Login from './Login';
import MyCard from './MyCard';

export default function Profile(props) {

    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState([])
    const [postId, setPostId] = useState(null);
    const [fetchSinglePost, setFetchSinglePost] = useState(false)

    console.log(fetchSinglePost, "test from profile")
    useEffect(() => {
        if (fetchSinglePost === false){
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts`)
            .then(res => res.json())
            .then(data => {
                console.log("test from false useEffect")
                setBlogs(data)
            })}
    }, []);

    useEffect(() => {
        if (fetchSinglePost === true){
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, "test from inside useEffect")
                setSingleBlog(data)
                console.log(singleBlog)
            })}
    }, [fetchSinglePost]);

    let myBlogs = []
    if (fetchSinglePost === false) {
        for (let i in blogs){
            if (blogs[i]['author']['username'] === props.username){
                myBlogs.push(blogs[i])
            }
        }
    }
    
    if (fetchSinglePost){
        console.log('xyz')
        console.log(singleBlog)
        myBlogs.push(singleBlog)
    }


    return (
        <>
            {myBlogs.map((blog, i) => 
            {return <MyCard key={i} title={blog['title']} content={blog['content']} id={blog['id']} loggedIn={props.loggedIn} setBlogs={setBlogs} setSinglePost={props.setSinglePost} setPostId={setPostId} fetchSinglePost={fetchSinglePost} setFetchSinglePost={setFetchSinglePost} />})}
        </>
    )
}
