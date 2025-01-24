import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';

function App() {
  const productlist= [
    {
      price:99999,
      name: "Iphone",
      quantity:0,
    },{
      price:9999,
      name:"redmi",
      quantity:0,
    },
  ];
  let [productlistState, setProductlist] = useState(productlist);

  const incrementQunatity = (index) => {
    let newProductList = [...productlistState];
    newProductList[index].quantity++;
    setProductlist(newProductList);
  };

  
  return (
    <>
      <Navbar/>
      <main className='container mt-5'>
      <ProductList productlist={productlist} incrementQunatity={incrementQunatity}/>
      </main>
      
    </>
  );
}

export default App;
