import React from 'react';
import './css/ProductDetails.css'

function ProductDetails(props) {
  return (
    <div class="container">
        <h1>Product Details</h1>
        <span>Learn more about this product. Submit your bid to win big!</span>
        <img src="" alt="Image of selected product" />
        <span>Product Name</span>
        <span>Product description</span>
        <span>Initial bidding price</span>
        <span>Current bid price</span>
        <button>Submit a bid</button>
    </div>
  );
}

export default ProductDetails;
