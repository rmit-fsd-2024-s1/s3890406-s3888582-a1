import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../data/repository";
import "../style/Login.css";

function Guide() {
  return (
    <div>

      <title>SOIL - Microfarming</title>

      <div id="content">

        <h2 id="main-title">Want to start Micro-Farming? It's as easy as 1 2 3!</h2>

        <p>
          Did you know that over 50% of people in Melbourne have their own little farm in their Backyard!?
          Thats Right! They plant all sorts of things such as tomatoes, beans, cucumbers, green onions, and even carrots!
        </p>

        <p>
          With our guide, you can surely and easily plant any plant of your choice!
        </p>

        <div id="images-container">

          <img src="https://images.unsplash.com/photo-1592918489661-b098eb4e343c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww" alt="Supermarket Fruit" className="product-image" />
          <img src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D" alt="Man Choosing Food" className="product-image" />
          <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29pbHxlbnwwfHwwfHx8MA%3D%3D" alt="Lady Choosing Food" className="product-image" />

        </div>

        <div id="product-details">

          <h2 id="product-title">What should I do?</h2>

          <p>
            First up, choose what youd like to grow. Most beginners actually try to grow berries the most. So then, lets try growing em'!
          </p>

          <p>
            First, well need to set a space for them. The ideal space for them is around 20 cm across. 
            Once you have your space, you can get strawberry seeds at various stores, and even ours! 
            Before putting them into the soil, its best if you shaken it up a bit with just any tool.
            The looser the soil, the better the polant cxan get resources from it and spread its roots. 
            After that, the plant will require dialy watering of approximately half a cup. And yes, thats all! 
            Now, over the period of 2 months the strawberry will blossom, and every month, you will be able to gather fresh and delicious strawberries!
          </p>

          <p>
            Sometimes, however, there can be pests that cann feast on your plant. Majorly, they are include slugs and snails. 
            The best protection you can organise for your plant can be a micro mesh to cover the plant around. 
            Through such mesh, those pesky pests wont be able to take your feast!
          </p>

          <p>
            And so after then, Happy Harvesting!
          </p>

        </div>

      </div>

    </div>
  );
}

export default Guide;
  