import React from "react";
import "../styles/PostCard.css"
import Loader from "./Loader";

function PostCardLoading({isIndividual = false}) {
    return(
        <div className={`post-loading ${isIndividual ? "post-loading-individual" : ""}`}>
            <Loader size={isIndividual ? 75 : 50}/>
        </div>
    );
};

export default PostCardLoading;