import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} />
        </div>
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Our Contact Information</h2>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Lemon Street, Citrus City</p>
      </div>
    </div>
  );
};

export default Contact;
