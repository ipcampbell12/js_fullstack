import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getPostById } from '../NetworkCalls';
import classes from './Post.module.css';

//have to use useParams() hook to use params in application

function Post(props) {
    let { id } = useParams();
    let [postObject, setPostObject] = useState({});

    useEffect(() => {
        getPostById(setPostObject, id);
    });

    //console.log(postObject.title)
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="title">{postObject.title}</div>
                <div className="postText">{postObject.postText}</div>
                <div className="footer">{postObject.username}</div>
            </div>
            <div className="rightSide"></div>

        </div>
    );
}

export default Post;