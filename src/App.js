

import './App.css';
import { UserProvider } from './store/UserProvider';
import {CartProvider} from './store/CartProvider';
import { Route,Switch,Redirect } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails';




function App() {

  return (
    <UserProvider>
    <CartProvider>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
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
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/store/:productId">
      <ProductDetails />
      </Route>
      </Switch>
   
   </CartProvider>
   </UserProvider>
  );
}

export default App;
