import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
});

export const getLoggedUser = async () => {
    try {
        const res = await api.get("/users/me"); // Pegando o usuário da sessão
        return res.data; // { id, username }
    } catch (err) {
        return null;
    }
};

export default api;