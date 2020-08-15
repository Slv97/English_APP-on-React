import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import CheckMode from './CheckMode';
import WriteMode from './WriteMode';
 
export default () => {
    const location = useLocation()
    //console.log(location.pathname === '/training/check-mode')
    return (
        <div className='game-page'>
            <NavLink to='/training'>
            <button className='btn-exit'>
                Exit
            </button>
            </NavLink>
            <div className='points-block'>
                <span className='correct-title'>Correct: </span>
                <span className='error-title'>Errors: </span>
            </div>
            { location.pathname === '/training/check-mode' 
            ? <CheckMode /> :
              location.pathname === '/training/write-mode' 
            ? <WriteMode /> : 
            null
            }
        </div>
    )
}