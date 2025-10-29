import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Sidebar.css";
import api from "../services/api";

function Sidebar() {
    const [user, setUser] = useState();

    useEffect(() => {
        api.get("/users/me").then(response => {
            console.log(response.data)
            if (response.data.id) {
                setUser(response.data)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="Sidebar">
            <Link to="/" className="logo-link">
                <img className="logo" src="/img/logo.png" alt="Logo" />
            </Link>

            <nav className="sidebar-nav">
                <NavLink to="/" className="nav-link" end>
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text">Home</span>
                </NavLink>
                <NavLink to="/createpost" className="nav-link">
                    <span className="nav-icon">✍️</span>
                    <span className="nav-text">Criar Post</span>
                </NavLink>
            </nav>

            <Link to="/createpost" className="nav-button-post">
                Postar
            </Link>

            {user ? user.username : <Link to="/login" className="nav-button-post btn-login" style={{"margin-top": "auto"}}>
                Quero logar
            </Link>}
        </div>
    );
}

export default Sidebar;