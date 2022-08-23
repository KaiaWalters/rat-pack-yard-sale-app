import React from 'react';
import '../css/ProductDetails.css'
import FormComponent from '../components/Form'
import ScreenHeader from '../components/ScreenHeader';
import {useLocation} from 'react-router-dom';

function ProductDetails(props) {
    const state = useLocation().state;


    return (
        <div className="product_container">
            <ScreenHeader header="Product Details" subheader="Learn more about this product. Submit your bid to win big!"/>
            <div className="product_container-sub">
                <img src={state.image} alt="selected product" />
                <h3>{state.name}</h3>
                <p>{state.description}</p>
                <span>Current bid price: {state.price}</span>
                <FormComponent product={state.name}/>
            </div>
        </div>
    );
}

export default ProductDetails;
