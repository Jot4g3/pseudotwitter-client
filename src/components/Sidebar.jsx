import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Sidebar.css";
import UserProfileChip from "./UserProfileChip";
import { UserContext } from "../context/UserContext";

function Sidebar() {
    const {user} = useContext(UserContext);

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

            </nav>

            <div className="sidebar-bottom">
                {
                user ? (
                <Link to="/logout" className="link">
                    <UserProfileChip username={user.username}/> 
                </Link>
                ) : (
                <Link to="/login" className="nav-button-post btn-login">
                    Quero logar
                </Link>
                )}

            </div>
        </div>
    );
}

export default Sidebar;