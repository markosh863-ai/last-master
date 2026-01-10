import React from 'react';
import Button from '../Ui Kit/Button';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label>Full Name*</label>
          <input type="text" placeholder="Enter Your Name" className="ui-input" />
        </div>
        <div className="contact-form__field">
          <label>Your Email*</label>
          <input type="email" placeholder="Enter Your Email" className="ui-input" />
        </div>
      </div>
      <div className="contact-form__field">
        <label>Message*</label>
        <textarea placeholder="Enter Your Message" className="ui-input ui-textarea"></textarea>
      </div>
      <Button text="Send Message" theme="dark" />
    </form>
  );
};

export default ContactForm;