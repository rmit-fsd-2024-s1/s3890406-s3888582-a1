import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../data/repository";
import "../style/Login.css";


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

    const verified = verifyUser(fields.name, fields.email, fields.password);

    if (verified === true) {
      props.loginUser(fields.name);
      setSuccessMessage("Login successful! Redirecting to Profile page...");
      setErrorMessage(null);
      
      setTimeout(() => {
        setSuccessMessage(null);
        navigate("/Profile");
      }, 2000); 
    
      return;
    }
  

    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    setErrorMessage("name / email / password invalid, please try again.");
  }

  return (
    
    <div className="login-container">
      <h2>Login</h2>
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
              <input type="submit" className="btn btn-primary" value="Login!" />
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
      </div>
    </div>
    );
  }

export default Login;
