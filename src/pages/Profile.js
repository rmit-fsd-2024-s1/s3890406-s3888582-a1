import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Profile.css';
import { getUser , removeUser} from '../data/repository';


function Profile(username) {
  const navigate = useNavigate();

  const name = getUser()[0]
  const email = getUser()[1]
  const joindate = getUser()[2]

  const logout_user = () => {
    removeUser();
    navigate("/Login")

  }

  const del_user = () => {
    navigate("/DeleteUser")

  }

  const edit_details = () => {
    navigate("/EditDetails")

  }

  return (
    <div id = "content">
      <h2 id = "profile-title">Profile</h2>

      <p>
        {name === null ?
            <>
              <p>You must Login to view the contents of this page.</p>           
            </>
            :
            <>
            <div id = "user-details">
              <p>Name: {name} </p>
              <p>Email: {email} </p>
              <p>Join date: {joindate} </p>
              
            </div>
              <button onClick={edit_details} id="edit-details-btn">Edit details</button> <br></br><br></br>
              <button onClick={logout_user} id="logout-btn">Logout</button> <br></br><br></br>
              <button onClick={del_user} id="delete-user-btn">Delete Account</button>
            </>
          }
      </p>
    </div>
  );
}

export default Profile;
