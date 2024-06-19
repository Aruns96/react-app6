import React from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';

const Header = () => {
  return (
   <header>
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto"  >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Button variant="dark">Cart:-<span>3</span></Button>
        </Container>
      </Navbar>
 
    <div style={{height:"100px",}} className='bg-dark-subtle text-dark-emphasis text-center align-middle display-2 fw-bold'>The Generics</div>
   </header>
  )
}

export default Header