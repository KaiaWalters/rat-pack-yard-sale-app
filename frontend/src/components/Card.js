import '../css/Card.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
  let item = props.item

  let truncate = (text)=> {
    let words = text.split(' ')
    if(words.length > 12){
      return words.splice(0, 16).join(' ') + '...'
    }
  }

  return (   
    <Link className="card-container" 
    to={`/details/${item.name}`}
      state={item}
    >
        <img src={item.image} alt={item.name} />
        <div className="product-info">
            <h3>{item.name}</h3>
            <p>{truncate(item.description)}</p>
            <span>Price:{item.price}</span>
        </div>
    </Link>
  );
}

export default Card;
