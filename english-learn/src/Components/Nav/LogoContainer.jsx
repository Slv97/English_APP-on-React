import React from 'react'
import logo from '../../img/logo.svg'

const LogoContainer = (props) => {
    return (
        <div className="logo-container">
            <img src={logo} />
            <span className="level-title"> Level {props.level}</span>
        </div>
    )
}

export default LogoContainer