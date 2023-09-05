import React, { useState } from 'react';

// Importing components
import Navigation from './Navigation';
import About from './About'
import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';




function Header() {
    const [currentPage, handlePageChange] = useState("About");

// Found amazing renderPage function that utilizes a switch statement to render each different page! Uses state hook to do so.
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