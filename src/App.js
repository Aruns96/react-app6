

import './App.css';

import {CartProvider} from './store/CartProvider';
import { Route,Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';




function App() {

  return (
    <CartProvider>
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/store" exact>
       <Store />
      </Route>
      <Route path="/about">
       <About />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/store/:productId">
      <ProductDetails />
      </Route>
      </Switch>
   
   </CartProvider>
  );
}

export default App;
