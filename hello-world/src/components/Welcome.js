import React, { Component } from 'react'

// Class component Welcome
class Welcome extends Component {
    render() {

        // Destructure parameters
        const {name, heroName} = this.props

        return (
            <p>{Welcome.displayName}: Welcome {name} a.k.a {heroName}</p>
        )
    }
}

Welcome.displayName = 'Welcome.js'

// Export the Welcome class component
export default Welcome