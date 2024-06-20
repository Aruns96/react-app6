import React,{useContext} from 'react';
import { Card,Button } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';
const EachItem = (props) => {
    const { addItemToCart } = useContext(CartContext);
    const handleClick = () => {
        addItemToCart(props.product);
      };
  return (

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imageUrl} alt="alt.img" />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.price}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Add to cart</Button>
        </Card.Body>
        </Card>
  
  )
}

export default EachItem