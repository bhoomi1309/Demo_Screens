import React from 'react';
import '../css/account_css.css';

const AccountSettings = () => {
  return (
    <div className="settings-container">
      <h3>Account Settings</h3>
      <div className="profile-card">
        <img
          className="profile-image"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
        />
        <div className="profile-details">
          <h4>Marry Doe</h4>
          <p className="email">Marry@Gmail.Com</p>
          <p className="desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;