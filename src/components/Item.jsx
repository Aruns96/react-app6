import React from 'react'
import EachItem from './EachItem';
import { Container,Row,Col } from 'react-bootstrap';
const productsArr = [

    {
    id:1,
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:2,
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:3,
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    id:4,
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const Item = (props) => {
  return (
    <section >
        <h2 className='text-center fw-bold'>{props.section}</h2>
        
    <Container>
      <Row className='g-2'>
        {productsArr.map(i=><Col key={i.title} xs={6} className='p-3'><EachItem  product={i} title={i.title} price={i.price} imageUrl={i.imageUrl}/></Col>)}
        
      </Row>
    </Container>
       
    </section>
  )
}

export default Item