import { useEffect, useState } from "react";
import { getAllPosts, getAllComments } from "../NetworkCalls";



function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    const [listOfComments, setListOfComments] = useState([]);


    useEffect(() => {
        getAllPosts(setListOfPosts);
        getAllComments(setListOfComments)
    }, []);

    return (
        <div className="post-page">
            <div className="left-side">
                <div className="post-container">
                    {listOfPosts.map((value, key) => {
                        return (
                            <div className="post" key={key}>
                                <div className="title"> {value.title} </div>
                                <div className="body">{value.postText}</div>
                                <div className="footer">{value.username}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="right-side">
                <div className="add-commen-container">
                    <input type="text" placeholder="Comment" autoComplete="off" />
                    <button>Add Comment</button>
                </div>
                <div className="list-of-comments">
                    {
                        listOfComments.map((comment, key) => {
                            <div id="individual" className="comment" key={key}>
                                <div className="title">Comment</div>
                                <div className="body">{comment}</div>
                                <div className="footer"></div>
                            </div>


                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;