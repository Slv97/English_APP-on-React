import React, {useRef, useState} from 'react';
 
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
    const library = JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}, {id: 0, word: '', translate: ''}, {id: 0, word: '', translate: ''}]
    const [index, setIndex] = useState(0)
    const checkKeyPress = (event) => {
        if(event.key === 'Enter') {
            checkGame()
        }
    }
    const checkGame = () => {
       if (inputRef.current.value === library[index].translate.replace('the ', '').toLowerCase()) {
        setIndex(index + 1)
        
        props.setCorrectAnswer(props.correctAnswer + 1)
        props.setScore(props.score + 1)
        //console.log(true)
       } else {
        props.setWrongAnswer(props.wrongAnswer + 1)
       }
       inputRef.current.value = ''
    }

    return (
        <div className='mode-wrapper'>
            <div className='mode-title-word'>
                {library[index].word}
            </div>
            <p className='mode-title-word-description'>Write translation fo this word</p>
            <div className='input-block'>
                <input onKeyPress={checkKeyPress} ref={inputRef} id='inputID' type="text" placeholder='Enter word' className='customInput' />
                <button className='btn-enter' onClick={checkGame}>Enter</button>
            </div>         
        </div>
    )
}