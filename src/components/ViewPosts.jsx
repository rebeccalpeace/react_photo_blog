import React from 'react'
import { useState, useEffect } from 'react';
import WordCard from './WordCard';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import ViewPost from './ViewPost';

export default function ViewPosts(props) {

    let navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://kekambas-blog.herokuapp.com/blog/posts")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, []);

    

    let myBlogs = []
    for (let i in blogs){
        if (blogs[i]['content'].startsWith('http')){
            myBlogs.push(blogs[i])
        }
    }

    let wordBlogs = []
    for (let i in blogs){
        if (blogs[i]['content'].startsWith('http') === false){
            wordBlogs.push(blogs[i])
        }
    }





  return (
    <>
        {wordBlogs.map((blog, i) => <WordCard key={i} title={blog['title']} content={blog['content']} author={blog['author']['username']} />)}
        {myBlogs.map((blog, i) => <Card key={i} title={blog['title']} content={blog['content']} />)}
    </>
  )
}
