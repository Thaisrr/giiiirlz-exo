import {NavLink} from "react-router-dom";
import React from "react";
import '../styles/Navigation.css';

const Navigation = () => (
    <nav className='Nav'>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
    </nav>
)
export default Navigation;
