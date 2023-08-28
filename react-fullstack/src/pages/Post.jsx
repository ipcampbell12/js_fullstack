import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getPostById, getAllComments, fetchCreateComment } from '../NetworkCalls';
import classes from './Post.module.css';

//have to use useParams() hook to use params in application

function Post(props) {
    let { id } = useParams();
    let [postObject, setPostObject] = useState([]);
    let [listOfComments, setListOfComments] = useState([]);
    let [commentText, setCommentText] = useState('');


    useEffect(() => {
        getPostById(setPostObject, id);
        getAllComments(setListOfComments, id);
    }, [listOfComments]);

    const addComment = () => {
        //e.preventDefaul();

        const commentObject = { PostId: id, commentBody: commentText }

        fetchCreateComment(commentObject);

        getAllComments(setListOfComments, id);

        // const commentToAdd = { commentBody: commentText }
        // setListOfComments([...listOfComments, commentToAdd]);

        setCommentText('');
    }

    //optimistic update - assume api request worked - jsut add it to state wiht restructuring
    //console.log(listOfComments);
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

            <div className={classes["right-side"]}>
                <div className="add-comment-container">

                    <input type="text" value={commentText} placeholder="commment" autoComplete="off" onChange={(e) => {
                        setCommentText(e.target.value);
                    }} />
                    <button onClick={addComment}>Add comment</button>

                </div>
                <div className="list-of-comments">
                    {
                        listOfComments.length > 0 ? (
                            listOfComments.map((comment, key) => {
                                return <div key={key} className={classes["comment"]}>{comment['commentBody']}</div>
                            })
                        ) : (
                            <p>Be the first to comment</p>
                        )
                    }
                </div>
            </div>

        </div>

    );
}

export default Post;


//don't forget the return keyword when mapping your state
//have to have value attribute in input tag to clear comment