import '../css/Card.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
  let item = props.item
  return (   
    <Link class="card-container" 
    to={`/details/${item.name}`}
      state={item}
    >
        <img src="../assets/us.jpg" alt="Mandolin" />
        <div class="product-info">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <span>Price:{item.price}</span>
        </div>
    </Link>
  );
}

export default Card;
