import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpecialDeals from './specialDeals';
import Login from './Login';
import Signup from './Signup'
import Review from './Review';
import Profile from './Profile';
import Guide from './Guide';
import DeleteUser from './DeleteUser.js';
import '../style/App.css';


import Navbar from '../components/Navbar.js';
import '../style/Navbar.css';

import Footer from '../components/Footer.js';
import '../style/Footer.css';

import Header from '../components/Header.js';
import '../style/Header.css';

import { getUser, removeUser } from "../data/repository.js";
import EditDetails from "./EditDetails.js";
import Cart from "./Cart.js";


function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/specialDeals" element={<SpecialDeals username={username}/>} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/Signup" element={<Signup username={username}/>} />
          <Route path="/Review" element={<Review username={username}/>} />
          <Route path="/Profile" element={<Profile username={username}/>} />
          <Route path="/Guide" element={<Guide username={username}/>} />
          <Route path="/DeleteUser" element={<DeleteUser username={username}/>} />
          <Route path="/EditDetails" element={<EditDetails username={username}/>} />
          <Route path="/Cart" element={<Cart username={username}/>} />
        </Routes>

        <Footer />
      </div>  
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <title>SOIL - Home</title>

      <div id="content">
        <h2 id="main-title">About Us</h2>
        <p>Welcome to SOIL, Melbourne’s premier destination for organic living and learning. 
          Established with the vision to bring the highest quality, organic fresh food to our 
          community, SOIL has grown into a revered institution with multiple locations throughout 
          Melbourne. Each SOIL store serves as a beacon for those seeking to nourish their bodies, 
          minds, and spirits with the purest ingredients nature has to offer.</p>

        <p>At SOIL, we are passionate about more than just food. We believe in the transformative 
          power of education and community engagement, offering a rich program of face-to-face 
          seminars that delve into the essentials of diet, nutrition, and the practicalities of 
          small-scale organic farming. These gatherings are designed not only to educate but to 
          foster a sense of community among those who share a commitment to sustainable living.</p>

        <div id="images-container">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Supermarket Fruit" className="product-image" />
          <img src="https://plus.unsplash.com/premium_photo-1682088309871-3cfc6f00f594?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Man Choosing Food" className="product-image" />
          <img src="https://plus.unsplash.com/premium_photo-1661752097584-c952502c3bed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lady Choosing Food" className="product-image" />
        </div>

        <div id="product-details">
          <h2 id="product-title">Fresh Organic Produce</h2>
          <p id="product-description">Discover our wide selection of fresh, locally sourced organic produce. 
          From vibrant fruits to crisp vegetables, we offer the finest quality ingredients for your healthy 
          lifestyle.</p> <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
