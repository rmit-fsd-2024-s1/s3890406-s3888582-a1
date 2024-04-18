import React from 'react';
import '../style/specialDeals.css';

function SpecialDeals() {
  return (
      <div>

        <div id="content">
            <h2 id="main-title">Special Deals!</h2>

            <div id="image-list" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <img src="https://media.istockphoto.com/id/155153756/photo/chocolate-and-peanut-butter-energy-bar.jpg?s=1024x1024&w=is&k=20&c=vy_QM-Bw_Tn30PM17W9O2-K2lhNvlegJNHTtPm1JWCo=" alt="Protein Bar" style={{ marginRight: '20px', width: '150px', height: 'auto' }} />
                  <p style={{}}>$5.99 now $2.99 - Chocolate Protein Bar</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <img src="https://media.istockphoto.com/id/615424950/photo/olive-oil-bottle-isolated-on-the-white.jpg?s=1024x1024&w=is&k=20&c=X2vd2-vQmY9lqT-X5uiaNEyh89KEcVf2VAjm5UqWxIk=" alt="Organic Olive Oil" style={{ marginRight: '20px', width: '150px', height: 'auto' }} />
                  <p style={{}}>$14.99 now $ 9.99 - Organic Olive Oil</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <img src="https://media.istockphoto.com/id/1369528511/photo/new-harvest-cleaned-carrots-packed-and-labeled-on-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=IP67FFtLuSwZi09djInECRdo8T3duOMfmzkRs5vDmJs=" alt="Organic Carrots" style={{ marginRight: '20px', width: '150px', height: 'auto' }} />
                  <p style={{}}>$8.99 now $4.99 -Pack of Organic Carrots</p>
                </div>
              </div>  

        </div>
      </div>  
    );
  }
  
  export default SpecialDeals;
