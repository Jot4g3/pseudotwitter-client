import React from "react";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import api from "../services/api";
import timeAfterPost from "../util/timeAfterPost";

function IndividualPost() {
    const {id} = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        api.get(`/posts/${id}`).then((response) => {
            console.log(response.data);
            setPost(response.data)
        }).catch((err) => {
            console.log(err)
        });
        
    }, [])

    return (
        <>
            {post ? 
            <PostCard 
                id={post.id}
                title={post.title}
                text={post.text}
                username={post.username}
                isClickable={false}
                isIndividual={true}
                commentCount={post.commentCount}
                createdAt={timeAfterPost(post.createdAt)}
            /> 
            : <Loader size={50}/>
            }
        </>

    );
}

export default IndividualPost