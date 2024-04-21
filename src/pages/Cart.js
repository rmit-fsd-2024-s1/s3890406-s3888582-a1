import React, { useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getItems , addCart, removeCart, verifyCard, getCartTotal, clearCart} from "../data/repository";
import '../style/specialDeals.css';


function Cart() {
  useEffect(() => {loadItems();}, []);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 
  const navigate = useNavigate();
  const [details, set_details] = useState({CN: '', CED: '', CVV: ''});

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
 
     const button = document.createElement('button');
     button.textContent = "+";
     button.addEventListener('click', () => {window.location.reload();addCart(items[i].id);});
 
     const button2 = document.createElement('button');
     button2.textContent = "-";
     button2.addEventListener('click', () => {window.location.reload();removeCart(items[i].id)});
 
     const p2 = document.createElement('p');
     p2.textContent = `In cart: ${items[i].cart}`;
 
     li.appendChild(img);
     li.appendChild(p);
     li.appendChild(button);
     li.appendChild(button2);
     li.appendChild(p2);
 
     ul.appendChild(li);
   }
 }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    set_details({ ...details, [name]: value });
  };

  const process_payment = () => {
    let card_state = verifyCard(details.CN, details.CED, details.CVV);


    if(card_state){
      setSuccessMessage("Thanks for your purchase!");
      setErrorMessage(null);
      clearCart();

      setTimeout(() => {
        navigate("/");
      }, 2000); 
    }
    else{
      setErrorMessage("Error, please ensure all detailf of your cards are correct");
      setSuccessMessage(null);
    }
  };

  const get_total = getCartTotal();

  return (
    <div>

      <div id="content">

        <h2 id="main-title">Cart:</h2>

        <ul id="special-list" style={{ display: 'flex', flexDirection: 'column' }}></ul>

      </div>

      <div id="content">

        <h2>Your Cart ammounts to: ${get_total}</h2>

        <h3>Enter Credit Card Details</h3>

        <input type="text" name="CN" placeholder="1234567809123456" value={details.CN} onChange={handleInputChange}/>

        <input type="text" name="CED" placeholder="12/2023" value={details.CED} onChange={handleInputChange}/>

        <input type="text" name="CVV" placeholder="123" value={details.CVV} onChange={handleInputChange}/>

        <button onClick={process_payment}>Buy</button>


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

      </div>

    </div>  
  );
}

export default Cart;
