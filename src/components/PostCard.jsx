import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PostCard.css";
import getAvatarLetter from "../util/getAvatarLetter";

const parseTextWithHashtags = (text) => {
    if (!text) return text || "";

    // aceita letras/numeração Unicode (acentos, outros alfabetos) e underscores
    const hashtagRegex = /\B#([\p{L}\p{N}_]+)/gu;
    const parts = text.split(new RegExp(`(${hashtagRegex.source})`, 'gu'));

    return parts.map((part, index) => {
        if (!part) return <React.Fragment key={index} />;
        // valida de forma simples se começa com #
        if (part.charAt(0) === "#") {
            return (
                <span key={index} className="post-hashtag">
                    {part}
                </span>
            );
        }
        // envolver o texto em Fragment com key para evitar warnings
        return <React.Fragment key={index}>{part}</React.Fragment>;
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
    createdAt
}) {
    
    const navigate = useNavigate();
    const safeUsername = username || "unknown";

    return (
        <div
            className={`post ${isIndividual ? "post-individual" : ""}`}
            onClick={isClickable ? () => navigate(`/post/${id}`) : undefined}
        >
            {/* 1. Coluna do Avatar (AGORA COM A LETRA) */}
            <div className="post-avatar">
                {/* Renderiza a primeira letra do username */}
                <span>{getAvatarLetter(safeUsername)}</span>
            </div>

            {/* 2. Coluna do Conteúdo (Header, Body, Footer) */}
            <div className="post-content">
                
                {/* Cabeçalho: Nome, @username, tempo */}
                <div className="post-header">
                    <span className="post-username">@{safeUsername}</span>
                    <span className="post-display-name">{title}</span>
                    <span className="post-timestamp">{createdAt}</span>
                    
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