import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';

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
  ]

  let 

  return (
    <>
      <Navbar/>
      <main className='container mt-5'>
      <ProductList productlist={productlist}/>
      </main>
      
    </>
  );
}

export default App;
