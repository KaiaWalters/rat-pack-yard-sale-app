import React from 'react';
import ProductDetails from './screens/ProductDetails';
import Home from './screens/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
    <>
    <BrowserRouter className="container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:type" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
