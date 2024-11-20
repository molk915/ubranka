import React, { useState } from 'react';
import './LoginWindow.css';

const LoginWindow = ({ onClose, switchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // For displaying messages
  const [error, setError] = useState('');      // For displaying errors

  const login = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: 'POST', // Use POST method to send data securely
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password in the request body
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setError('');
        console.log('Login successful:', data.message);
        // Close the modal after successful login
        if (onClose) onClose();
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setMessage('');
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
      setMessage('');
    }
  };

  const handleOverlayClick = (e) => {
    // Close modal if the user clicks on the overlay background
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="login-container modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={login}>
          {/* Form fields */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="switch-link">
          Don't have an account? <span onClick={switchToRegister}>Register here</span>
        </p>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginWindow;
