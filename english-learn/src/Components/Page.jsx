import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}]
        }
        this.changeMode = this.changeMode.bind(this)
        this.getValue = this.getValue.bind(this)
        this.addWordToLibrary = this.addWordToLibrary.bind(this)
    }

    componentWillMount() {
        
    }
    
    componentWillUnmount() {

    }

    shouldComponentUpdate() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {
        this.state.library = this.props.library
    }
    
    componentDidMount() {
            document.addEventListener('keydown', (event) => {
                if (this.state.value.length > 0 && this.state.isOpen && event.key === 'Enter') {
                    this.addWordToLibrary()
                }
            })      
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    async removeWordFromLibrary(index) {
        await this.setState(prevState => ({
            library: prevState.library.filter((word, i) => i !== index)
        }))
        //console.log(this.state.library)
        await localStorage.setItem('library', JSON.stringify(this.state.library))
    }

    async addWordToLibrary() {        
        try {
            const response = await fetch(`https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=ru&target=en&input=${this.state.value}`, {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
		            "x-rapidapi-key": "51dfa73065msh246ab7c58d88e96p15b9c8jsne121c037bbd5"
	        }
        })
        const result = await response.json()
        if (result.outputs) {
            await this.setState( () => ({
                translation: result.outputs[0].output
            }))
        }    
        await this.setState(prevState => ({
            library: [...prevState.library, {id: this.state.library.length, word: this.state.value, translate: this.state.translation}]
        }))
        await localStorage.setItem('library', JSON.stringify(this.state.library))
        await this.changeMode()
        await this.setState( () => ({
            translation: ''
        }))
        }
        catch(error) {
            console.log(error)
        }
    }

    async getValue(event) {
        const value = event.currentTarget.value
        this.setState( () => ({
            value: value
        }))
    }

    render() {
        return (
            <div className='page-container'>
                <div className="add-word-container">
                    {!this.state.isOpen ?
                        <span className="label-title">Add new word</span> : 
                        <div>
                            <input onChange={this.getValue} placeholder="Enter new word" />
                            <span>{this.state.translation}</span>
                            <button onClick={this.addWordToLibrary} className="btn-round check"></button>
                        </div>   
                    }
                    <button onClick={this.changeMode} className={this.state.isOpen ? 'btn-round close' : 'btn-round add'}></button>
                </div>

                <div className='library-container'>
                    <div className='library-header'>
                        <div>Word</div>
                        <div>Translate</div>
                        <div>Learn level</div>
                    </div>
                    {this.state.library.map((word, index) => (
                        <div key={index}>
                             <div>
                                {word.id}
                            </div>
                            <div>
                                {word.word}
                            </div>
                            <div>
                                {word.translate}
                            </div>
                            <div onClick={() => this.removeWordFromLibrary(index)}> Delete </div>
                        </div>                        
                    ))}
                </div>
            </div>                  
        )
    }
}

export default Page

//09-33