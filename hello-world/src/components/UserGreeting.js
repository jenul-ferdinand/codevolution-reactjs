import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // Conditional rendering
        return this.state.isLoggedIn && <div>Welcome Jenul</div>

        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Jenul</div> 
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )
        
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Jenul</div>
        // } else { 
        //     message = <div>Welcome Guest</div>
        // }

        // return message

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Logged In User
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>
        //             Welcome Vishwas
        //         </div>

        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting