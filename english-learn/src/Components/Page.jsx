import React from 'react'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
        this.changeMode = this.changeMode.bind(this)
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="add-word-container">
                    {this.state.isOpen ?
                        <span className="label-title">Add new word</span> : 
                        <div>
                            <input placeholder="Enter new word" />
                            <button onClick={this.changeMode} className="btn-round check"></button>
                        </div>                              
                        
                    }
                    <button onClick={this.changeMode} className="btn-round add"></button>
                </div>
            </div>                    
        )
    }
}

export default Page