import React from "react";
import { useEffect, useState } from "react";
import { getAllPosts } from '../NetworkCalls';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    //when you're in a route and you want to change to another route, call history.push and pass the route that you want to go to 

    let navigate = useNavigate();

    useEffect(() => {
        getAllPosts(setListOfPosts);
    }, [listOfPosts]);



    return (
        <div>
            {listOfPosts.map((value, key) => {
                return (
                    <div
                        key={key}
                        className="post"
                        onClick={() => {
                            navigate(`/post/${value.id}`);
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