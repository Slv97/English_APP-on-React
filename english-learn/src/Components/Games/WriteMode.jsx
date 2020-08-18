import React, {useRef, useState, useContext} from 'react';
import {Context} from './../../context'
 
export default (props) => { 
    const context = useContext(Context)
    const inputRef = useRef()
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
        context.setScore(context.score + 1)
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