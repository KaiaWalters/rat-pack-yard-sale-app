import React from 'react';
import CardContainer from '../components/CardContainer';
import '../css/Home.css'
import data from '../data/itemsForSale.js'

function Home(props) {
  return (
    <div class='container'>
        <header>
          <h1>Virtual Yard Sale!</h1>
          <p>Check out the items for sale, place your bid, enter your contact info, an be prepared for pick up if you win!</p>
        </header>
        <CardContainer items={data}/>
    </div>
  );
}
export default Home;
