import React from 'react';

function Footer(props) {
  return (
    <footer>

      <p>Authors: Mike and Jab</p>

      <p>

        {props.username === null ?
          <>
          <li className="nav-item">
              <span className="nav-link text-light">Please Login!</span>
            </li>                 
          </>
          :
          <>
            <li className="nav-item">
              <span className="nav-link text-light">Welcome, {props.username}</span>
            </li>
          </>
        }

      </p>

      <p>
        <a href="mailto:s3888582@student.rmit.edu.au">s3888582</a>
        <a href="mailto:s3890406@student.rmit.edu.au">s3890406</a>
      </p>

    </footer>
  );
}

export default Footer;