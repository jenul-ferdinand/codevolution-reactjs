import React, { Component } from 'react'

// Class component Welcome
class Welcome extends Component {
    render() {
        return (
            <p>{Welcome.displayName}: Welcome {this.props.name} a.k.a {this.props.heroName}</p>
        )
    }
}

Welcome.displayName = 'Welcome.js'

// Export the Welcome class component
export default Welcome