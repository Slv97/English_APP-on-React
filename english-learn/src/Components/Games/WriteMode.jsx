import React, {useRef} from 'react';
 
export default (props) => { 
    // const aE= ['1', '3', '5']  
    const inputRef = useRef()
    // const aERef = useRef(Array(aE.length)) 
    const checkWord = () => {
        //let s = inputRef.current.value
        // let s = aERef.current[2]
        // debugger
        // console.log(s)
    }
    return (
        <div className='mode-wrapper'>
            <div className='mode-title-word'>
                Forest
            </div>
            <p className='mode-title-word-description'>Write translation fo this word</p>
            <div className='input-block'>
                <input ref={inputRef} id='inputID' type="text" placeholder='Enter word' className='customInput' />
                <button className='btn-enter' onClick={checkWord}>Enter</button>
            </div>         
        </div>
    )
}