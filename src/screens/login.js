import React from 'react';
import '../css/login_css.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Signin to your <br /> PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <label className="input-label" htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter email address" />

        <label className="input-label" htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" />

        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;