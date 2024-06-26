import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getUser, removeUser } from "../data/repository.js";


function Footer() {
  return (
    <footer>

      <p>Authors: Mike and Jab</p>

      <p>
        <a href="mailto:s3888582@student.rmit.edu.au">s3888582</a>
        <a href="mailto:s3890406@student.rmit.edu.au">s3890406</a>
      </p>

    </footer>
  );
}

export default Footer;