import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/repository";
import '../style/Signup.css';

function Login(props) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const temp = { name: fields.name, email: fields.email, password: fields.password };
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(fields.password.length < 8){setErrorMessage("Password too short, min size of 8 required.");return;}

    let has_number = false
    for (let i = 0; i < fields.password.length; i++) {
      if (!isNaN(fields.password.charAt(i))){has_number = true;}
    }

    if (!has_number){setErrorMessage("Password requires at least 1 number.");return;}

    const addable = addUser(fields.name, fields.email, fields.password);

    if(addable === true) {
      setSuccessMessage("Account created! Redirecting to Login page...");
      setErrorMessage(null);
      
      setTimeout(() => {
        navigate("/Login");
      }, 2000); 
      return;
    }

    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    setErrorMessage("Name taken, please try again.");
  }

 return (
  <div className="signup-container">
    <h2>Create an Account</h2>
    <hr />

    <div id="row">
      <div id="col-md-6">
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="name" className="control-label">Name: </label>
            <input name="name" id="name" className="form-control"
              value={fields.name} onChange={handleInputChange} />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="control-label">Email: </label>
            <input type="email" name="email" id="email" className="form-control"
              value={fields.email} onChange={handleInputChange} />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="control-label">Password: </label>
            <input type="password" name="password" id="password" className="form-control"
              value={fields.password} onChange={handleInputChange} />
          </div>
          <br />

          <div className="button-group">
            <input type="submit" className="btn btn-primary" value="Sign Up!" />
          </div>
          <br />

          {successMessage && (
              <div className="message-group">
                <span className="text-success">{successMessage}</span>
              </div>
            )}


          {errorMessage !== null &&
            <div className="error-group">
              <span className="text-danger">{errorMessage}</span>
            </div>
          }
        </form>
      </div>
    </div>
  </div>
);
        }
export default Login;
