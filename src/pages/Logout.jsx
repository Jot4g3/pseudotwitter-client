import "../styles/Logout.css"
import api from "../services/api";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Logout(){
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try{
                await api.post("/users/logout");
            } catch(err) {
                console.error("Erro na API ao fazer logout: ", err)
            } finally{
                setUser(null);
                navigate("/login");
            }
        };
        performLogout();
    }, [setUser, navigate])

    return (
        <div className="Logout">
            <h1>Saindo...</h1>
            <Loader size={50}/>
        </div>
    );
}

export default Logout;