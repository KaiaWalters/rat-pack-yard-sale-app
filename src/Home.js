import React from 'react';
import CardContainer from './CardContainer';
import './css/Home.css'

function Home() {
  return (
    <div class='container'>
        <h1>Virtual Yard Sale!</h1>
        <p>Check out the items for sale, place your bid, enter your contact info, an be prepared for pick up if you win!</p>
        <CardContainer/>
    </div>
  );
}

export default Home;
