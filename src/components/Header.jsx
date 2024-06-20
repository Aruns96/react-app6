import React ,{useContext}from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';

const Header = (props) => {
    const { cartItems} = useContext(CartContext);
  return (
   <header>
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto"  >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Button onClick={()=>{props.onShow()}}  variant="dark">Cart:-<span>{cartItems.length}</span></Button>
        </Container>
      </Navbar>
 
    <div style={{height:"100px",}} className='bg-dark-subtle text-dark-emphasis text-center align-middle display-2 fw-bold'>The Generics</div>
   </header>
  )
}

export default Header