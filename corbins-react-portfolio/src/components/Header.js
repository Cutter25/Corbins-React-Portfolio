import React, { useState } from 'react';

function Header() {
    const [header, setHeader] = useState("About");

    return (
        <div className='header'>
            <h1 className='header-welcome'>
                Welcome User!
            </h1>

            <p className='welcome-p'>You are viewing Corbin Cutter's web development portfolio.</p>

            <div className='header-nav'>
                <Navigation />
            </div>

        </div>
    );
};


export default Header;