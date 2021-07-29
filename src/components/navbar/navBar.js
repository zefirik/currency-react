import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "NavBar">
            <div>
                <Link to='/buy'> Buy </Link>
            </div>
            <div>
                <Link to='/sale'> Sale </Link>                
            </div>
        </div>
    );
}

export default NavBar;