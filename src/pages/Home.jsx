import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import PostCard from "../components/PostCard";
import api from "../services/api";
import CreatePost from "./CreatePost";
import timeAfterPost from "../util/timeAfterPost";
import PostCardLoading from "../components/PostCardLoading";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function Home() {
    const { user } = useContext(UserContext);
    const [loadedPosts, setLoadedPosts] = useState(false);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/posts")
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
                setLoadedPosts(true)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {loadedPosts ? (
                <>
                    <div className="Home">
                        <div className="PostList">
                            {posts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    text={post.text}
                                    username={post.user.username}
                                    isClickable={true}
                                    isIndividual={false}
                                    commentCount={post.commentCount}
                                    createdAt={timeAfterPost(post.createdAt)}
                                />
                            ))}
                        </div>
                    </div>
                    <CreatePost onCreatePost={(newPost) => setPosts([newPost, ...posts])} user={user}/>
                </>
            ) : (
                <>
                    <div className="Home">
                        <div className="PostList">
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                            <PostCardLoading/>
                        </div>
                    </div>
                    <CreatePost onCreatePost={() => {}}/>
                </>
            )}
        </>
    );
}

export default Home;