import React, {Component} from 'react'
import'./css/Message.css'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Contact'
        }
    }
    changeMessage() {
        this.setState({
            message: 'vmawerere@gmail.com'
        })
    }
    render() {
        return(
            <div className='Contact' id='Contact'>
                <h1 className='Heading'>CONTACT</h1>
                <p>{this.state.message}</p>
                <button onClick={() => this.changeMessage()}>email Me</button>
            </div>
        )
    }
}

export default Message