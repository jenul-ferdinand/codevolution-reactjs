import React from 'react'

// Functional Component
const Greet = props => {

    // Destructured parameters
    const {name, heroName, children} = props

    // Set the display name of this componenet
    Greet.displayName = 'Greet.js'

    return (
        <div>
            <p>{Greet.displayName}: Hello {name} a.k.a {heroName}</p>
            {children}
        </div>
    )
}

// Export the component
export default Greet

