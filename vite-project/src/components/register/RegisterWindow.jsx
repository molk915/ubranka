import React, { useState } from 'react';
import './RegisterWindow.css';

const RegisterWindow = ({ onClose, switchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');  // For displaying messages
    const [error, setError] = useState('');      // For displaying errors
  
    const register = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch("http://localhost:5000/create-account", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
          setError('');
          console.log('Account created:', data.message);
          // Optionally, close the modal or switch to login
          if (onClose) onClose();
        } else {
          const errorData = await response.json();
          setError(errorData.message);
          setMessage('');
          console.error('Registration failed:', errorData.message);
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
          <h2>Register</h2>
          <form onSubmit={register}>
            <div className="input-group">
              <label htmlFor="email-register">Email</label>
              <input
                type="email"
                id="email-register"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password-register">Password</label>
              <input
                type="password"
                id="password-register"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="submit-button">Register</button>
          </form>
          <p className="switch-link">
            Already have an account? <span onClick={switchToLogin}>Login here</span>
          </p>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    );
  };
  
  export default RegisterWindow;
