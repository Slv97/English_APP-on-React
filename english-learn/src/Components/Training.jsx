import React, {useEffect} from 'react';
import imgModel from './../img/screenMode1.png' 
import Mode from './mode'

const Training = () => {
    const modeClassName = ['easy-mode', 'hard-mode']
    const modeTitle = ['Easy mode', 'Hard mode']
    useEffect( () => {
        return () => {

        }
    })
    return (
        <div className='mode-page'>
            <Mode modeClassName={modeClassName[0]}
                  modeTitle={modeTitle[0]}
            />
            <Mode modeClassName={modeClassName[1]}
                  modeTitle={modeTitle[1]}
            />
        </div>
        
    )
}

export default Training