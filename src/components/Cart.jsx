import React ,{useContext}from 'react'
import { Container,Row,Col,Button,Offcanvas } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';


    
    
const Cart = (props) => {
    const { cartItems, removeItemFromCart ,calculateTotalPrice} = useContext(CartContext);
  return (
       <>
       <Button variant="dark" className="position-relative" onClick={props.setShow}>
       <i className="bi bi-cart"></i>
       
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>
      <Offcanvas show={props.show} onHide={props.setShow} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        <Container >
           
            <Row>
                <Col>Item</Col>
                <Col>price</Col>
                <Col>qunantity</Col>
            </Row>
           {
                cartItems.map(i=><Row key={i.title}> <Col>{i.title}</Col> <Col>{i.price}</Col> <Col><span><input type="text" value={i.quantity} readOnly/></span><span><button onClick={() => removeItemFromCart(i.id)}>remove</button></span></Col></Row>)
            }
           
            <div>
                <span>Total:--</span>
                <span>{calculateTotalPrice().toFixed(2)}</span>
            </div>
            <button>purchase</button>
            </Container>
           
        </Offcanvas.Body>
      </Offcanvas>
       
            </>
  )
}

export default Cart
