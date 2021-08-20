import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {  
  const [deals, setDeals] = useState();
  const [searchValue, setSearchResult] = useState();

  useEffect(() => {
    let url = 'https://bakesaleforgood.com/api/deals';
    axios.get(url)
        .then(res => {
          console.log(response);          
          response.data && setDeals(response.data);
        });
  }, []);

  const showFilterResult = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      //Todo
      //setSearchResult();
    } else {
      //Todo
    }    
  };

  const handleShowDetails = (deal_key) => {
    let url = `https://bakesaleforgood.com/api/deals/${deal_key}`;
    axios.get(url)
    .then(res => {
      console.log(res);          
      //Todo
    });
  }


  return (
    <>
      <h2>Deal List</h2>
      <input
        type="search"
        value={searchValue}
        onChange={showFilterResult}
        className="input"
        placeholder="Search by Terms"
      />
      <div className="deal-list">
        {deals && deals.length > 0 ? (
          deals.map((deal) => (
            <div key={deal.key} className="deal" onClick={()=> handleShowDetails(deal.key)}>
              <div className="deal-image">
                <img src={deal.media}  alt="Product Image" />    
              </div>
              <div className="deal-title">{deal.title}</div>
              <span className="deal-price">Rs. {deal.price}</span>              
            </div>
          ))
        ) : (
          <h1>No deals available!</h1>
        )}
      </div>
     </>
  );
}

export default App;
