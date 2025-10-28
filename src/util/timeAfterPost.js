function timeAfterPost(dateMySql) {
    const now = new Date();
    const dataPost = new Date(dateMySql); // Ex: "2025-10-28T14:22:00Z"
    const diffMs = now - dataPost;
  
    const sec = Math.floor(diffMs / 1000);
    const min = Math.floor(sec / 60);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) return `há ${years} ano${years > 1 ? 's' : ''}`;
    if (months > 0) return `há ${months} mês${months > 1 ? 'es' : ''}`;
    if (weeks > 0) return `há ${weeks} semana${weeks > 1 ? 's' : ''}`;
    if (days > 0) return `há ${days} dia${days > 1 ? 's' : ''}`;
    if (hours > 0) return `há ${hours} hora${hours > 1 ? 's' : ''}`;
    if (min > 0) return `há ${min} minuto${min > 1 ? 's' : ''}`;
    return `há ${sec} segundo${sec > 1 ? 's' : ''}`;
}

export default timeAfterPost;