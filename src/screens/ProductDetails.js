import React from 'react';
import '../css/ProductDetails.css'
import {useParams, useLocation} from 'react-router-dom';

function ProductDetails(props) {
    const {type} = useParams();
    const state = useLocation().state;
    console.log("Props Param",type)
    console.log("Props State Param", state)

    return (
        <div class="container">
            <h1>Product Details</h1>
            <span>Learn more about this product. Submit your bid to win big!</span>
            <img src={state.image} alt="Image of selected product" />
            <span>{state.name}</span>
            <span>{state.description}</span>
            <span>Current bid price: {state.price}</span>

            <div class="container">
                <h2>Interested?</h2>
                <span>Submit a bid!</span>
                <form class="container" action="">
                    <input type="text" name='username' placeHolder="Username"required/>
                    <input type="text" />
                    <input type="text" />
                    <button>Submit your bid</button>
                </form>
            </div>
        </div>
    );
}

export default ProductDetails;
