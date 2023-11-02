import React from 'react';

const Hello = () => {
//    return (
//        <div className='dummyClass'>
//            <h1>Hello Jenul</h1>
//        </div>
//    )

    return React.createElement(
        'div', 
        {id: 'hello'}, 
        React.createElement('h1', null, 'Hello Jenul')
    )
}

export default Hello;