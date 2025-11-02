import {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import api from "../services/api";
import timeAfterPost from "../util/timeAfterPost";
import PostCardLoading from "../components/PostCardLoading";
import Comments from "../components/Comments";
import "../styles/IndividualPost.css"

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
        <div className="individual-container">
            {post ? 
                <>
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
                    <Comments
                        postId={post.id}
                        visible={true}
                    />
                </>
                : <PostCardLoading isIndividual={true}/>
            }
        </div>
    );
}

export default IndividualPost;