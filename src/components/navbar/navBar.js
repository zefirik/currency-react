import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
           <div  className="my-3">
            <ul className = "nav justify-content-center">
            <li className = "nav-item">
                <Link className="nav-link" to='/buy'> Buy </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/sale'> Sale </Link> 
            </li>
            </ul>
        </div>    
    );
}

export default NavBar;


