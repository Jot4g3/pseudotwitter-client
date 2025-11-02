import "../styles/Comment.css";
import getAvatarLetter from "../util/getAvatarLetter";

function Comment({ username, body, createdAt }) {
    return (
        <div className="comment-card">
            <div className="comment-avatar">
                {getAvatarLetter(username)}
            </div>

            <div className="comment-body">
                <span className="comment-username">@{username}</span>
                <span className="comment-time"> · {createdAt}</span>

                <p className="comment-text">{body}</p>
            </div>
        </div>
    );
}

export default Comment;
