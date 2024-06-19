import React from 'react'
import { Card,Button } from 'react-bootstrap'
const EachItem = (props) => {
  return (

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imageUrl} alt="alt.img" />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
        </Card.Body>
    </Card>
  
  )
}

export default EachItem