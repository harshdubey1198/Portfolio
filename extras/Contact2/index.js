import React, { useState } from 'react';
import Particle from '../Particle4';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [resume, setResume] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('resume', resume);
    formData.append('description', description);

    fetch('https://getform.io/f/9cdbd3e7-8c0c-4941-84c4-42dbf1d63990', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSubmitted(true);
      })
      .catch((error) => console.log(error));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="contact-form-container">
      <Particle style={{ pointerEvents: 'none' }} />
      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        {isSubmitted ? (
          <p>Your submission is successful!</p>
        ) : (
          <>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input id="email" tabIndex="2" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" tabIndex="3" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="resume">Resume:</label>
              <input type="file" id="resume" tabIndex="4" onChange={(e) => setResume(e.target.files[0])} />
            </div>
            <div className="input-container">
              <label htmlFor="description">Description:</label>
              <textarea id="description" tabIndex="5" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="button-container">
              <button type="submit" onClick={handleButtonClick}>
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

