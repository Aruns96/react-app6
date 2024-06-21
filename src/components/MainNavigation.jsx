import { Navbar,Nav,Container } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Cart from "../components/Cart"
const MainNavigation = (props) => {
   
    const [show,setshow]=useState(false)
    const showHandler=()=>{
      setshow(prev=>!prev)
    }
    return (
     <header>
      <Navbar sticky="top" className='bg-dark' variant="dark">
          <Container>
            
            <Nav className="navbar navbar-dark bg-dark"  >
              <NavLink className="me-3" style={({isActive})=>isActive?{color:"white"}:{color:"gray"}} to='./home'>Home</NavLink>
              <NavLink className="me-3" style={({isActive})=>isActive?{color:"white"}:{color:"gray"}} to='./store'>Store</NavLink>
              <NavLink className="me-3" style={({isActive})=>isActive?{color:"white"}:{color:"gray"}} to='./about'>About</NavLink>
              
            </Nav>
            <Cart setShow={showHandler} show={show}/>
            {/* <Button onClick={()=>{props.onShow()}}  variant="dark">Cart:-<span>{cartItems.length}</span></Button> */}
            
          </Container>
        </Navbar>
   
      
     </header>
    )
}

export default MainNavigation