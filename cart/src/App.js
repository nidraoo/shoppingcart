import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';

function App() {
  const product= [
    {
      price:99999,
      name: "Iphone",
      quantity:0,
    },{
      price:9999,
      name:"redmi",
      quantity:0,
    },{

    }
  ]
  return (
    <>
      <Navbar/>
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
