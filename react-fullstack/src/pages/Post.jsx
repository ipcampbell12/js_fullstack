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

        <div className={classes["post-page"]} >

            <div className={classes["left-side"]}>
                {postObject.length > 0 ? (
                    <div className={classes["post"]}>
                        <div className={classes["title"]}>{postObject[0]['title']}</div>
                        <div className={classes["post-text"]}>{postObject[0]['postText']}</div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
                }
            </div>

            <div className={classes["right-side"]}>Comment Section</div>

        </div>

    );
}

export default Post;