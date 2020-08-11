import React from 'react'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}]
        }
        this.changeMode = this.changeMode.bind(this)
        this.getValue = this.getValue.bind(this)
        this.addWordToLibrary = this.addWordToLibrary.bind(this)
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
        //console.log(this.state)
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
            library: [...prevState.library, [{id: this.state.value.length, word: this.state.value, translate: this.state.translation}]]
        }))
        //await console.log(this.state.library.length + ' add Word with set state')
        await localStorage.setItem('library', JSON.stringify(this.state.library))    
            console.log(result.outputs[0].output)
        }
        catch(error) {
            console.log(error)
        }
    }

    async getValue(event) {
        //console.log(event.currentTarget.value)
        const value = event.currentTarget.value
        this.setState( () => ({
            value: value
        }))
        
        console.log(this.state.library.length + 'change input')
    }

    render() {
        return (
            <div>
                <div className="add-word-container">
                    {this.state.isOpen ?
                        <span className="label-title">Add new word</span> : 
                        <div>
                            <input onChange={this.getValue} placeholder="Enter new word" />
                            <span>{this.state.translation}</span>
                            <button onClick={this.addWordToLibrary} className="btn-round check"></button>
                        </div>                              
                        
                    }
                    <button onClick={this.changeMode} className="btn-round add"></button>
                </div>
            </div>                    
        )
    }
}

export default Page

//47:20