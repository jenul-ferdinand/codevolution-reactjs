import React, { Component } from 'react';

// Class component Welcome
class Welcome extends Component {
    render() {
        return (
            <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        );
    }
}

// Export the Welcome class component
export default Welcome;