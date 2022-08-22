import React from 'react';
import '../css/ProductDetails.css'
import Form from '../components/Form'
import {useLocation} from 'react-router-dom';

function ProductDetails(props) {
    const state = useLocation().state;


    return (
        <div className="product_container">
            <h1>Product Details</h1>
            <span>Learn more about this product. Submit your bid to win big!</span>

            <div className="product_container-sub">
                <img src={state.image} alt="selected product" />
                <h3>{state.name}</h3>
                <span>{state.description}</span>
                <span>Current bid price: {state.price}</span>
                <Form product={state.name}/>
            </div>
        </div>
    );
}

export default ProductDetails;
