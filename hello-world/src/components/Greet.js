import React from 'react'

// Functional Component
const Greet = props => {
    // Set the display name of this componenet
    Greet.displayName = 'Greet.js'

    return (
        <div>
            <p>{Greet.displayName}: Hello {props.name} a.k.a {props.heroName}</p>
            {props.children}
        </div>
    )
}

// Export the component
export default Greet

