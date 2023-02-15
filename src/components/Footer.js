import React from 'react';

function Footer() {
    return (
        <div>
            <main className='footer'>
                <p className='footer-p'>Profile Links</p>
                <a className='footer-github' href={process.env.PUBLIC_URL + 'https://github.com/Cutter25'}>GitHub</a>
                <a className='footer-linkedin' href={process.env.PUBLIC_URL + 'https://www.linkedin.com/in/corbincutter/'}>LinkedIn</a>
                <a className='footer-stack-overflow' href={process.env.PUBLIC_URL + 'https://stackoverflow.com/users/21222084/corbin-cutter'}>stack overflow</a>
            </main>
        </div>
    );
};

export default Footer;