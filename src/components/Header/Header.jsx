import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return <> <div>HEADER</div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
    </ul>
    </>
}

export default Header;