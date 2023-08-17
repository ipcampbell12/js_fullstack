import { useEffect, useState } from "react";
import { getAllPosts } from "../NetworkCalls";



function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);


    useEffect(() => {
        getAllPosts(setListOfPosts);
    }, []);

    return (
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
    );
}

export default Home;