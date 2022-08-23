import React from 'react';
import CardContainer from '../components/CardContainer';
import ScreenHeader from '../components/ScreenHeader';
import '../css/Home.css'
import data from '../data/itemsForSale.js'

function Home(props) {
  return (
    <div className='container'>
        <header>
          <h1></h1>
          <p></p>
        </header>
        <ScreenHeader header="Rat Pack!" subheader="Check out the items for sale, place your bid, enter your contact info, an be prepared for pick up if you win!"/>

        <CardContainer items={data}/>
    </div>
  );
}
export default Home;
