import '../css/Card.css';
import React from 'react';

function Card() {
  return (   
    <a class="card-container" href="http://localhost:3000/details">
        <div>
            <img src="../assets/us.jpg" alt="Mandolin" />
            <h1>Mandolin</h1>
            <p>Mandolin that is lightly used, solid construction.</p>
            <span>Price: $40</span>
        </div>
    </a>
  );
}

export default Card;
