import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser , getUser , editUserName , editUserPass } from "../data/repository";
import "../style/DeleteUser.css";


function EditDetails(props) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 
  const navigate = useNavigate();

  const name = getUser()[0]

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const temp = { name: fields.name, email: fields.email, password: fields.password };

    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    setSuccessMessage(null);
    setErrorMessage(null);


    event.preventDefault();

    let message = "";

    if (fields.email == ''){message += "Didnt change name.\n";}
    else {
      editUserName(fields.email)
      message += "Name set to " + fields.email + ".\n";
    }

    if (fields.password == ''){message += "Didnt change password.\n";}
    else {
      editUserPass(fields.password)
      message += "Password set to " + fields.password + ".\n";
    }

    setSuccessMessage(message);

    setTimeout(() => {
      navigate("/Profile");
    }, 2000); 

  }

  return (
    
    <div className="login-container">
      <h2>Edit details. If you dont want to change a section, please leave it blank</h2>
      <hr />
      <div id="row">

      {name === null ?
        <>
          <p>Error: cannot edit unauthorised user. Please log in</p>           
        </>
        :
        <>

          <div id="col-md-6">

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label htmlFor="email" className="control-label">Name: </label>
                <input type="name" name="email" id="email" className="form-control"
                  value={fields.email} onChange={handleInputChange} />
              </div>
    
              <div className="input-group">
                <label htmlFor="password" className="control-label">Password: </label>
                <input type="password" name="password" id="password" className="form-control"
                  value={fields.password} onChange={handleInputChange} />
              </div>
              <br />
    
              <div className="button-group">
                <input type="submit" className="btn btn-primary" value="Proceed" />
              </div>

              {successMessage && (
                <div className="message-group">
                  <span className="text-success">{successMessage}</span>
                </div>
              )}


              {errorMessage !== null &&
                <div className="message-group">
                  <span className="text-danger">{errorMessage}</span>
                </div>
              }
            </form>

          </div>

        </>
      }

      </div>
    </div>
    );
  }

export default EditDetails;
