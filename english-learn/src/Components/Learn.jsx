import React, {useState} from 'react';

const Learn = ( {setScore, score, CheckLevel} ) => {
    const library = JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}]
    const [index, setIndex] = useState(0)  
    const [end, setEnd] = useState(false) 
    const word = library[index]
    
    const repeatLearn = () => {
        setEnd(false) 
        setIndex(0)
    }    
    
    const nextWord = () => {
        if (library.length - 1 !== index) {
           setIndex(index+1) 
           setScore(score + 0.5)
           CheckLevel()
           library[index].learn= library[index].learn + 1
           localStorage.setItem('library', JSON.stringify(library))
        } else {
            setEnd(true)
        }        
    }  
    
    return (
        <div className='learn-wrapper'>
            <div className='learn-container'>
                {!end ?
                //ДОДЕЛАТЬ ФОРМУЛУ
                    <div className='percentage'>
                        {Math.floor((100 - ((100)/(word.id))))}%

                        {/* {Math.floor((word.learn + word.correct - 5 - word.error) / 5 * 100)}% */}
                        {console.log(this.wordsRef)}
                        
                    </div>                     
                    :
                    null
                }

                <div className='word-translation'>
                    {!end ?
                          word.translate
                          :
                         <div> Well done!
                            <div onClick={repeatLearn} className='btn-repeat'> 
                                &#10227;
                            </div>
                         </div>
                    }
                </div>

                {!end ? 
                    <div className='word-container'>
                        <span className='description-label'>Translation:</span>

                        <span className='word'>{word.word}</span>
                    </div> 
                    :
                    null
                }

                {!end ? 
                    <div onClick={nextWord} className='btn-next'> 
                        &#8594;	
                    </div>
                    :
                    null 
                } 
            </div>
        </div>        
    )    
}

export default Learn