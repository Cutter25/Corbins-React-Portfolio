import React, { useState } from 'react';

function Header() {
    const [header, setHeader] = useState([]);

    return (
        <div className='header'>
            <div className='header-welcome'>
                {/* Welcome message goes here */}
            </div>

            <div className='header-nav'>
                {/* navbar goes here */}
            </div>

        </div>
    );
};


export default Header;