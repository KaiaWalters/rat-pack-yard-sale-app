import '../css/Card.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
  let item = props.item
  return (   
    <Link className="card-container" 
    to={`/details/${item.name}`}
      state={item}
    >
        <img src={item.image} alt={item.name} />
        <div className="product-info">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <span>Price:{item.price}</span>
        </div>
    </Link>
  );
}

export default Card;
