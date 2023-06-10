import React, { useState } from 'react';
import axios from 'axios';
import "../css/form.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the contact object
      const contact = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number
      };

      // Send the contact data to your backend to handle the submission
      await axios.post('http://your-backend-url/contact', contact);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone_number: ''
      });

      // Display a confirmation message
      alert('Thank you for contacting us!');
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div className="contact-form">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
