import React from "react";
import imgModel from './../img/screenMode1.png' 

export default (props) => {
    return (
        <div className='mode-page'>
            <div className='mode-container'>
                <div>
                    <h2 className='mode-title'> {props.modeTitle} Check words Mode </h2>
                    <p className='model-description easy-mode'>Easy mode</p>
                </div>
                <div>
                    <img src={imgModel} alt="screenMode1" />
                </div>
            </div>
        </div>
    )
}