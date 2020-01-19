import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss';


const ContactForm = () => {
  const [name, setName] = useState('name...');
  const [message, setMessage] = useState('message...');
  const [email, setEmail] = useState('email...');

  const handleSubmit = what => {
    what.preventDefault();
    console.log('what', what);
  };

  return (
    <form id="contact-form" action="http://spideep.com/test_sendmail/index.php" onSubmit={handleSubmit} method="POST" className="ContactForm">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)} 
          className="form-control" 
          aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          name="message" 
          className="form-control"
          value={message}
          onChange={setMessage}
          rows="5">
          </textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};



ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
