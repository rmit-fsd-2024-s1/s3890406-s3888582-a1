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
      <h2>Profile</h2>

      <p>
        {name === null ?
            <>
              <p>Please Login!</p>           
            </>
            :
            <>
              <p>Name: {name} </p>
              <p>Email: {email} </p>
              <p>Join date: {joindate} </p>


              <button onClick={edit_details}>Edit details</button> <br></br><br></br>
              <button onClick={logout_user}>Logout</button> <br></br><br></br>
              <button onClick={del_user}>DELETE USER</button>

            </>
          }
      </p>
    </div>
  );
}

export default Profile;
