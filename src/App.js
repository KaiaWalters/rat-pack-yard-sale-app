import React from 'react';
import ProductDetails from './ProductDetails';
import Home from './Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
