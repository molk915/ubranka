import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to contact us!</p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
        <br />
        <textarea placeholder="Your message"></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
