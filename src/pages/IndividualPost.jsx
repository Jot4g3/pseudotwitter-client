// FALTA COLOCAR OS COMENTÁRIOS À DIREITA
import React from "react";
import {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import api from "../services/api";
import timeAfterPost from "../util/timeAfterPost";
import PostCardLoading from "../components/PostCardLoading";

function IndividualPost() {
    const {id} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState();

    useEffect(() => {
        api.get(`/posts/${id}`).then((response) => {
            console.log(response.data);
            setPost(response.data)
        }).catch((err) => {
            console.log(err);
        });
        
    }, [id])

    return (
        <>
            {post ? 
            <PostCard 
                id={post.id}
                title={post.title}
                text={post.text}
                username={post.user.username}
                isClickable={false}
                isIndividual={true}
                commentCount={post.commentCount}
                createdAt={timeAfterPost(post.createdAt)}
            /> 
            : <PostCardLoading isIndividual={true}/>
            }
        </>

    );
}

export default IndividualPost