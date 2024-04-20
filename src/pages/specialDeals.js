import React, { useEffect } from 'react';
import { getItems } from "../data/repository";
import '../style/specialDeals.css';

const loadItems = () => {
  const ul = document.getElementById("special-list");
  ul.innerHTML = '';

  let items = getItems();

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = items[i].image_url;

    const p = document.createElement('p');
    p.textContent = `${items[i].item} - Was: ${items[i].price_old} Now: ${items[i].price_new}`;

    li.appendChild(img);
    li.appendChild(p);

    ul.appendChild(li);
  }
}

function SpecialDeals() {
  useEffect(() => {loadItems();}, []);

  return (
    <div>
      <div id="content">
        <h2 id="main-title">Special Deals!</h2>
        <ul id="special-list" style={{ display: 'flex', flexDirection: 'column' }}></ul>
      </div>
    </div>  
  );
}

export default SpecialDeals;
