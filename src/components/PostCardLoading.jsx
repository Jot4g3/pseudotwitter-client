import React from "react";
import "../styles/PostCard.css"
import Loader from "./Loader";

function PostCardLoading({isIndividual}) {
    return(
        <div className="post-loading">
            <Loader/>
        </div>
    );
};

export default PostCardLoading;