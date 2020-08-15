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
           <input ref={inputRef} id='inputID' type="text" placeholder='Enter word' />
           {/* <button onClick={checkWord}>Check</button>
           {aE.map((element, index) => <div ref={el => aERef.current[index] = el} > {element} </div>
           )} */}
        </div>
    )
}