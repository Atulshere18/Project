import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // To make API calls
import '../index.css';

const Register = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        dob,
        email,
        password,
      });

      if (response.data.success) {
        // If registration is successful, show a success message and navigate
        setSuccessMessage('Registration successful!');
        setTimeout(() => navigate('/login'), 2000);  // Redirect to login after 2 seconds
      } else {
        // If there's an error, show the error message
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              name="dob"
              placeholder="Enter your date of birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
        <p className="register-link">
          Already have an account?{' '}
          <button className="btn-register" onClick={() => navigate('/login')}>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
