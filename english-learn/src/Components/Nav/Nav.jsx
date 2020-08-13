import React from 'react'
import LogoContainer from './LogoContainer'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <LogoContainer level={'0'} />
                <div className="nav-container">
                    <NavLink to='/library'> Library </NavLink>
                    <NavLink to='/training'> Training </NavLink>
                    <NavLink to='/learn'> Learn </NavLink>
                </div>
        </nav>
    )
}

export default Nav