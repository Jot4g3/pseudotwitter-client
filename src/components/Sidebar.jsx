import React from "react";
import {Link} from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar(){
    return(
        <div className="Sidebar">
            <Link to="/">Home</Link>
            <Link to="/createpost">Criar Post</Link>
        </div>
    );
}

export default Sidebar;