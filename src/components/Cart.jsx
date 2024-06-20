import React ,{useContext}from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';


    
    
const Cart = (props) => {
    const { cartItems, removeItemFromCart ,calculateTotalPrice} = useContext(CartContext);
  return (
        <div className='position-absolute top-0 end-0 bg-primary-subtle p-3 mt-5 overflow-auto'>
        <Container >
            <h2>cart</h2>
            <button onClick={()=>{props.onClose()}}>X</button>
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
            </div>
    
  )
}

export default Cart
