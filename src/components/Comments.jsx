import { useEffect, useState } from "react";
import api from "../services/api";
import Comment from "./Comment";
import Loader from "./Loader";
import timeAfterPost from "../util/timeAfterPost";
import "../styles/Comments.css";
import { useNavigate } from "react-router-dom";

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/comments/${postId}`)
        .then(res => {
            setComments(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }, [postId]);

    const onSubmit = () => {
        if (!newComment.trim()) return;

        api.post(`/comments`, { body: newComment, postId: postId })
        .then(res => {
            setComments([res.data, ...comments]);
            setNewComment("");
        })
        .catch((err) => {
            console.log(err);
            navigate("/login");
        });
    };

    return (
        <div className={`comments-sidebar`}>
            
            <h2>Comentários</h2>

            <div className="comment-input-box">
                <textarea
                    placeholder="Escreva um comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={onSubmit}>Enviar</button>
            </div>

            {loading ? (
                <Loader size={40} />
            ) : comments.length === 0 ? (
                <p className="empty-text">Nenhum comentário ainda 😶</p>
            ) : (
                comments.map(c => (
                    <Comment
                        key={c.id}
                        username={c.user.username}
                        body={c.body}
                        createdAt={timeAfterPost(c.createdAt)}
                    />
                ))
            )}
        </div>
    );
}

export default Comments;
