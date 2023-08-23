import React from "react";
import { useEffect, useState } from "react";
import { getAllPosts } from '../NetworkCalls'

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);


    useEffect(() => {
        getAllPosts(setListOfPosts);
    }, []);

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return (
                    <div
                        key={key}
                        className="post"
                        onClick={() => {
                            history.push(`/post/${value.id}`);
                        }}
                    >
                        <div className="title"> {value.title} </div>
                        <div className="body">{value.postText}</div>
                        <div className="footer">{value.username}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;