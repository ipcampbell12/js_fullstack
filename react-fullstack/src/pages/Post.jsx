import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getPostById } from '../NetworkCalls';
import classes from './Post.module.css';

//have to use useParams() hook to use params in application

function Post(props) {
    let { id } = useParams();
    let [postObject, setPostObject] = useState([]);

    useEffect(() => {
        getPostById(setPostObject, id);
    }, []);

    console.log(postObject);
    return (

        <div className="postPage" >
            {postObject.length > 0 ? (
                <div className="leftSide">
                    <div className="title">{postObject[0]['title']}</div>
                    <div className="postText">{postObject[0]['postText']}</div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
            <div className="rightSide"></div>

        </div>

    );
}

export default Post;