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

  return (
    <div>
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
              <button onClick={logout_user}>Logout</button>
            </>
          }
      </p>
    </div>
  );
}

export default Profile;
