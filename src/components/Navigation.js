import React, { useState } from 'react';
import Hamburger from './Hamburger';

function Navigation(props) {
    const navButtons = ['About', 'Work', 'Contact', 'Resume'];

    const [hamburgerOpen, setHamburgeropen] = useState(false);

    const toggleHamburger= () => {
        setHamburgeropen(!hamburgerOpen)
    }

    return(
        <div>
            <ul className='nav-list'>
                {navButtons.map((navButton) => (
                    <li className={props.currentPage === navButton ? "nav-item-is-active" : "nav-item"} key={navButton}>
                        <a href={"#" + navButton.toLowerCase()} onClick={() => props.handlePageChange(navButton)} 
                        className={props.currentPage === navButton ? "nav-link-active" : "nav-link"}> {navButton}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='Hamburger' onClick={toggleHamburger}>
                <Hamburger />
            </div>

            <style jsx>{`

                .nav-list {
                    display: ${hamburgerOpen ? 'inline-block' : 'none'};
                    background-color: lightgray;
                    height: 200px;
                    width: 100&;
                    margin-top: 50px;
                    list-style-type: none;
                    text-decoration: none;
                    padding: 0;
                    font-size: 20px;
                    font-family: 'Open Sans', sans-serif;
                }

            `}</style>
        </div>
    )
};

export default Navigation;