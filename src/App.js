
import { useState } from 'react';
import './App.css';
import Button from "./components/Button"
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  const [showCart,setShowCart]=useState(false);
  const showClickHandler=()=>{
    setShowCart(true)
  }
  const hideCartHandler=()=>{
    setShowCart(false)
  }
  return (
    <>
   <Header onShow={showClickHandler}/>
   <Item section="MUSIC"/>
   <Item section="MERCH"/>
   {showCart&&<Cart onClose={hideCartHandler}/>}
   <Button />
   <Footer />
    </>
  );
}

export default App;
