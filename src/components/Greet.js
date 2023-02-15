// this file is here for me to practice react stuff lol

import React from 'react'

// function Greet() {
//     return <h1>Hello World!</h1>
// };

const Greet = (props) => {
    console.log(props)

    const { name } = props
    return <h1>Hello {name}</h1>
};

export default Greet