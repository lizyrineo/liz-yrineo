
import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
 
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    e.target.reset();
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://ly-portfolio-mailer.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className='all-form' onSubmit={handleSubmit}>
      <div className='name'>
        <label htmlFor="name">Name:</label>
        <input className='name-box' type="text" id="name" required />
      </div>
      <div className='email'>
        <label htmlFor="email">Email:</label>
        <input className='email-box' type="email" id="email" required />
      </div>
      <div className='message'>
        <label htmlFor="message">Message:</label>
        <textarea className='message-box' id="message" required />
      </div>
      <button className='submit' type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;