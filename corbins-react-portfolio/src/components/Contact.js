import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
          setName(inputValue);
          setErrorMessage('Name required')
        } else if (inputType === 'email') {
          setEmail(inputValue);
          setErrorMessage('Email required')
        } else {
          setMessage(inputValue);
        }
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Your email is invalid.');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
        }
        if (!e.target.value.length) {
            setErrorMessage(`A name is required.`);
        }
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('Submission complete!');
      };
    

    return (
        <div>
            <form className="contact-form">
                <input
                    className='name-and-email-input'
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    onBlur={handleInputChange}
                />
                <input
                    className='name-and-email-input'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    onBlur={handleInputChange}
                />
                <input
                    className='message-input'
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="What can I help you with?"
                    onBlur={handleInputChange}
                />
        <button className="contact-submit-button" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

    );
};

export default Contact