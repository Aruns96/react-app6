

import './App.css';

import {CartProvider} from './store/CartProvider';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

const router = createBrowserRouter([
  {path:"/",element:<Root />
    ,children:[
      {path:"/home",element:<Home />},
      {path:"/store",element:<Store />},
      {path:"/about",element:<About />}
    ]
  }
])

function App() {

  return (
    <CartProvider>
   {/* <Header onShow={showClickHandler}/>
   <Item section="MUSIC"/>
   <Item section="MERCH"/>
   {showCart&&<Cart onClose={hideCartHandler}/>}
   <Button />
   <Footer /> */}
   <RouterProvider router={router}/>
   </CartProvider>
  );
}

export default App;
