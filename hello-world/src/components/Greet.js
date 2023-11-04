import React from 'react'

// Functional Component
const Greet = props => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    );
}

// Export the component
export default Greet;

