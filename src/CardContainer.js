import React from 'react';
import './css/CardContainer.css';
import Card from './components/Card'

function CardContainer() {
  return (
    <div className="row">
      <Card/>
      <Card/>
    </div>
  );
}

export default CardContainer;
