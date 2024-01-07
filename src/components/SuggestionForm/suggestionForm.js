import React, { useState } from 'react';
import './SuggestionForm.css';

const SuggestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      suggestion
    };

    fetch('https://getform.io/f/9cdbd3e7-8c0c-4941-84c4-42dbf1d63990', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission successful:', data);
        // Clear form inputs after successful submission
        setName('');
        setEmail('');
        setSuggestion('');
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  return (
    
    <div className="suggestion-form" >
      <h2>Provide a Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          style={{color:"violet"}}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group" style={{ color: 'white', fontWeight: 'bolder' }}>
          <label htmlFor="email">Email :</label>
          <input
          style={{color:"violet"}}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea
          style={{color:"white"}}
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SuggestionForm;
