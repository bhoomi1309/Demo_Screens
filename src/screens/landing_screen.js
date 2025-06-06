import React from 'react';
import '../css/landing_css.css';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="create-btn" onClick={() => navigate('/signup')}>Create Account</button>
        <button className="login-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;