import React from 'react';
import '../css/ProductDetails.css'
import Form from '../components/Form'
import {useParams, useLocation} from 'react-router-dom';
import axios from "axios";

const baseURL = "mongodb+srv://rickyBobby:Kathullu19981369@cluster0.2knf4.mongodb.net/?retryWrites=true&w=majority";

function ProductDetails(props) {
    const {type} = useParams();
    const state = useLocation().state;


    return (
        <div class="product_container">
            <h1>Product Details</h1>
            <span>Learn more about this product. Submit your bid to win big!</span>

            <div class="product_container-sub">
                <img src={state.image} alt="Image of selected product" />
                <h3>{state.name}</h3>
                <span>{state.description}</span>
                <span>Current bid price: {state.price}</span>
                <Form product={state.name}/>
            </div>
        </div>
    );
}

export default ProductDetails;
