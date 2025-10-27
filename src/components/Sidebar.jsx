import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
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
        </div>
    );
}

export default Sidebar;