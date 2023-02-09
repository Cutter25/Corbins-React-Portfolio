import React, { useState } from 'react';

// Importing components
import Navigation from './Navigation';



function Header() {
    const [currentPage, handlePageChange] = useState("About");

// Found amazing renderPage function that utilizes a switch statement to render each different page! 
    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <About />;
            case 'Work':
                return <Work />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;

            default:
                return <About />
        };
    };

    return (
        <div className='header'>
            <h1 className='header-welcome'>
                Welcome User!
            </h1>

            <p className='welcome-p'>You are viewing Corbin Cutter's web development portfolio.</p>

            <div className='header-nav'>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>

        </div>
    );
};


export default Header;