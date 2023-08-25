import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getPostById } from '../NetworkCalls';
import classes from './Post.module.css';

//have to use useParams() hook to use params in application

function Post(props) {
    let { id } = useParams();
    let [post, setPost] = useState([]);

    useEffect(() => {
        getPostById(setPost, id);
    });

    console.log(post)
    return (
        <div>
            {id}
        </div>
    );
}

export default Post;