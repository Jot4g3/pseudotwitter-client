import React from "react";
import { useNavigate } from "react-router-dom";

const parseTextWithHashtags = (text) => {
    const hashtagRegex = /#\w+/g;
    const parts = text.split(new RegExp(`(${hashtagRegex.source})`, 'g'));

    return parts.map((part, index) => {
        if (part.match(hashtagRegex)) {
            return <span key={index} className="post-hashtag">{part}</span>;
        }
        return part;
    });
};

function PostCard({ 
    id, 
    title, 
    text, 
    username, 
    isClickable, 
    isIndividual,
    commentCount, 
}) {
    
    const navigate = useNavigate();

    const avatarLetter = username?.charAt(0).toUpperCase() || "?";

    return (
        <div
            key={id}
            className="post"
            onClick={isClickable ? () => navigate(`/post/${id}`) : undefined}
            id={isIndividual ? "individual" : undefined}
        >
            {/* 1. Coluna do Avatar (AGORA COM A LETRA) */}
            <div className="post-avatar">
                {/* Renderiza a primeira letra do username */}
                <span>{avatarLetter}</span>
            </div>

            {/* 2. Coluna do Conteúdo (Header, Body, Footer) */}
            <div className="post-content">
                
                {/* Cabeçalho: Nome, @username, tempo */}
                <div className="post-header">
                    <span className="post-display-name">{title}</span>
                    <span className="post-username">@{username}</span>
                    <span className="post-timestamp">TEMPO</span>
                    
                    <div className="post-more-options">
                        <span>v</span>
                    </div>
                </div>

                {/* Corpo: Texto do post (com hashtags!) */}
                <div className="post-body">
                    <p>{parseTextWithHashtags(text)}</p>
                </div>

                {/* Rodapé: Ações (com contadores dinâmicos) */}
                <div className="post-footer">
                    <div className="post-action action-reply">
                        <span>💬</span>
                        {/* Só mostra o contador se for > 0 */}
                        {commentCount > 0 && (
                            <span className="action-count">{commentCount}</span>
                        )}
                    </div>
                    {/* <div className="post-action action-retweet">
                        <span>🔄</span>
                        {retweetCount > 0 && (
                            <span className="action-count">{retweetCount}</span>
                        )}
                    </div>
                    <div className="post-action action-like">
                        <span>❤️</span>
                        {likeCount > 0 && (
                            <span className="action-count">{likeCount}</span>
                        )}
                    </div> */}
                    <div className="post-action action-share">
                        <span>📤</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;