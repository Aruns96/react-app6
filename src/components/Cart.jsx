import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const Cart = (props) => {
    
  return (
    
        <Container >
            <h2>cart</h2>
            <button onClick={()=>{props.onClose()}}>X</button>
            <Row>
                <Col>Item</Col>
                <Col>price</Col>
                <Col>qunantity</Col>
            </Row>
           {
                cartElements.map(i=><Row> <Col>{i.title}</Col> <Col>{i.price}</Col> <Col><span><input type="text" value={i.quantity}/></span><span><button>remove</button></span></Col></Row>)
            }
           
            <div>
                <span>Total</span>
                <span>10</span>
            </div>
            <button>purchase</button>
            </Container>

    
  )
}

export default Cart
