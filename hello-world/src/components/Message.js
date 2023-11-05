import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        // Call the superclass
        super()

        this.state = {
            message: 'Message.js: Null'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Message.js: Button Pressed'
        })
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.message}
                </p>
                <button onClick={() => this.changeMessage()}>Message Button</button>
            </div>
        )
    }
}

export default Message