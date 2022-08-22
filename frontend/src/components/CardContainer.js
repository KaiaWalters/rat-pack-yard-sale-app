import React from 'react';
import '../css/CardContainer.css';
import Card from './Card'

function CardContainer(props) {
  let itemsForSale = props.items

  return (
    <div className="row">
       {
        itemsForSale.map(function(item, index){
          return <Card key={index} item={item}/>
        })
      }
    </div>
  );
}

export default CardContainer;
