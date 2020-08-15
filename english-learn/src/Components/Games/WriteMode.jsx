import React, {useRef} from 'react';
 
export default (props) => {   
    const inputRef = useRef() 
    const checkWord = () => {
        let s = inputRef.current.value
        console.log(s)
    }
    return (
        <div className='mode-wrapper'>
           <input ref={inputRef} id='inputID' type="text" placeholder='Enter word' />
           <button onClick={checkWord}>Check</button>
        </div>
    )
}