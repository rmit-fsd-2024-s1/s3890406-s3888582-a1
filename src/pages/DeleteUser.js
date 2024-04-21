import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser , getUser , deleteUser } from "../data/repository";
import "../style/DeleteUser.css";


function DeleteUser(props) {
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

    if (fields.name == 'confirm'){
      deleteUser();

      setSuccessMessage("Deletion successful! Redirecting to Login page...")

      setTimeout(() => {
        navigate("/Login");
      }, 2000); 
    
      return;
    }


    
    else {

      const temp = { ...fields };
      temp.text = "";
      setFields(temp);

      setErrorMessage("Confirmation invalid, Please ensure you typed 'confirm'");
      return;
    }

  }

  return (
    
    <div className="login-container">
      <h2>Delete User</h2>
      <hr />
      <div id="row">

      {name === null ?
        <>
          <p>Error: cannot delete unauthorised user. Please log in</p>           
        </>
        :
        <>

          <div id="col-md-6">

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label htmlFor="name" className="control-label">The Deletion process is IRREVERSiBLE. Please type 'confirm' to proceed: </label>
                <input name="name" id="name" className="form-control"
                  value={fields.name} onChange={handleInputChange} />
              </div>
    
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

export default DeleteUser;
