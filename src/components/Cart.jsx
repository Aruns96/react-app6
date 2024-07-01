import React ,{useContext,useEffect,useState}from 'react'
import { Container,Row,Col,Button,Offcanvas } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';


    
    
const Cart = (props) => {
    const { cartItems, removeItemFromCart ,calculateTotalPrice} = useContext(CartContext);

     useEffect(()=>{
        let email;
        if (localStorage.getItem("email")) {
          email = localStorage.getItem("email").replace(/@/g, "").replace(/\./g, "");
        }
        const url = `https://crudcrud.com/api/9d8ad89f14c34af39ecc502ce7be311e/cart${email}`;
    
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json(); 
          } else {
            console.error("Error fetching cart items:", response.statusText);
           
          }
        })
        .then(cartItemsCrud => {
          console.log("Cart Items:", cartItemsCrud);
          setItem(cartItemsCrud)
          
        })
        .catch(error => {
          console.error("Error fetching cart items:", error);
         
        });
     },[]
    )
    const [item, setItem] = useState([]);

  return (
       <>
       <Button variant="dark" className="position-relative" onClick={props.setShow}>
       <i className="bi bi-cart"></i>
       
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {item.length}
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
                item.map(i=><Row key={i.title}> <Col>{i.title}</Col> <Col>{i.price}</Col> <Col><span><input type="text" value={i.quantity} readOnly/></span><span><button onClick={() => removeItemFromCart(i.id)}>remove</button></span></Col></Row>)
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
