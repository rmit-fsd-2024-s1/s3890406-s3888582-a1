import React from 'react';
import '../style/Profile.css';


function Profile({ username }) {

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {username} </p>
    </div>
  );
}

export default Profile;
