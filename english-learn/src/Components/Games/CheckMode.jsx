import React, {useEffect, useState} from 'react';
 
export default (props) => {
    const checkWord = () => {
        props.setScore(props.score +1)
    }
    const [initialScore, setInitialScore] = useState(props.score)
    useEffect( () => {
        return () => {
            props.setScore(initialScore)
        }
        //componentWillUnmount
    }, [])
    console.log(initialScore)
    console.log(props.score)
    
    return (
        <div className='mode-wrapper'>
            <div className='mode-title-word'>
                Forest
            </div>
            <p className='mode-title-word-description'>Set translation fo this word</p>
            <div className='check-item-block'>
                <div className='check-item' onClick={checkWord}>
                    U
                </div>
                <div className='check-item'>
                    U
                </div>
                <div className='check-item'>
                    U
                </div>
            </div>
        </div>
    )
}