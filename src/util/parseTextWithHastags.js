import React from "react";

const parseTextWithHashtags = (text) => {
  if (!text) return "";

  // Captura sequências com ou sem espaços mantendo os símbolos
  const parts = text.match(/#([\p{L}\p{N}_]+)|[^\s#]+|\s+|#/gu);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith("#") && part.length > 1) {
      return (
        <span key={index} className="post-hashtag">
          {part}
        </span>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export default parseTextWithHashtags;