import React from 'react';
import '../css/signup_css.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create your <br /> PopX account</h2>

        <label htmlFor="fullName">Full Name<span>*</span></label>
        <input type="text" id="fullName" placeholder="Enter your name" />

        <label htmlFor="phone">Phone number<span>*</span></label>
        <input type="text" id="phone" placeholder="Enter phone number" />

        <label htmlFor="email">Email address<span>*</span></label>
        <input type="email" id="email" placeholder="Enter email" />

        <label htmlFor="password">Password<span>*</span></label>
        <input type="password" id="password" placeholder="Enter password" />

        <label htmlFor="company">Company name</label>
        <input type="text" id="company" placeholder="Enter company name" />

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <label>
            <input type="radio" name="agency" />
            Yes
          </label>
          <label>
            <input type="radio" name="agency" />
            No
          </label>
        </div>

        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Signup;