import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Home.css";
import PostCard from "../components/PostCard";
import api from "../services/api"


function Home(){
    const [posts, setPosts] = useState([]);
    const [commentCount, setCommentCount] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/posts").then((response) => {
            console.log(response.data);
            setPosts(response.data)
        });
    }, [])

    return (
        <div className="Home">
            <div className="PostList">
                {posts.map((post) => {
                    return(
                        <PostCard 
                            id={post.id}
                            title={post.title}
                            text={post.text}
                            username={post.username}
                            isClickable={true}
                            isIndividual={false}
                            commentCount={post.commentCount}
                        />
                    );
                })}
            </div>
        </div>
        
    )
}

export default Home;