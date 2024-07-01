import React,{useContext} from 'react';
import { Card,Button } from 'react-bootstrap';
import { CartContext } from '../store/CartProvider';
import { Link } from 'react-router-dom';


const EachItem = (props) => {
    const { addItemToCart } = useContext(CartContext);
    let email;
    if (localStorage.getItem("email")) {
      email = localStorage.getItem("email").replace(/@/g, "").replace(/\./g, "");
    }
  
    const handleClick = () => {
        addItemToCart(props.product);
        console.log("email",email)
        const url = `https://crudcrud.com/api/9d8ad89f14c34af39ecc502ce7be311e/cart${email}`;
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(props.product),
          })
            .then(response => {
              if (response.ok) {
                
              } else {
                console.error("Error adding product to cart:", response.statusText);
                
              }
            })
            .catch(error => {
              console.error("Error adding product to cart:", error);
             
            });
      };
  return (
       
       <Link to={`/store/${props.product.id}`} style={{color:'black'}}>
        <Card style={{ width: "18rem" }} className="mx-auto m-3">
         
        <Card.Img variant="top" src={props.imageUrl} alt="alt.img" />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.price}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Add to cart</Button>
        </Card.Body>
        </Card>
        </Link>
        
  
  )
}

export default EachItem