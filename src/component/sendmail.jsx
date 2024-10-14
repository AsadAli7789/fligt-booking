import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_27tmpqo', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear the form or show a success message
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
