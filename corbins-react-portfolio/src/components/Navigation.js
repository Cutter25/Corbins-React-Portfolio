import React from 'react';


function Navigation(props) {
    const navButtons = ['About', 'Work', 'Contact', 'Resume'];

    return(
        <div>
            <ul>
                {navButtons.map((navButton) => (
                    <li className={props.currentPage === navButton ? "nav-item is-active" : "nav-item"}key={navButton}>
                        <a href={"#" + navButton.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.handlePageChange(navButton)}
                            className={
                                props.currentPage === navButton ? "nav-link active" : "nav-link"
                            }>
                                {navButton}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};





export default Navigation;