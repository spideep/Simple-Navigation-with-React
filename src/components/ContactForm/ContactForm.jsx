import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss';

const ContactForm = () => (
  <form id="contact-form" action="http://spideep.com/test_sendmail/index.php" onSubmit={handleSubmit} method="POST" className="ContactForm">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input name="name" type="text" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email</label>
      <input type="email" name="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea name="message" className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

const handleSubmit = what => {
  // what.preventDefault();
  what.preventDefault();
  console.log('what', what);
};

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
