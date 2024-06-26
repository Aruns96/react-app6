import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

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
const ProductData = (props) => {
   
   
    const item = productsArr.filter((item) => item.id === Number(props.prodId));


  return (
    <>
   
    <Container>
        <Row >
            <Col >
            <h2 className='justify-content-center'>{item[0].title}</h2>
            </Col>
        </Row>
        
        <Row>
            <Col className="m-auto">
              <img src={item[0].imageUrl} alt="item" />
            </Col>
        </Row>
        <Row>
            <Col className="m-auto">
              <h3>Price:--{item[0].price}</h3>
            </Col>
        </Row>
      <Row>
        
        <Col className="m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          eligendi accusamus reiciendis aliquam eos quibusdam ipsa illum
          officiis aut blanditiis adipisci, recusandae iure a commodi ratione
          temporibus sint architecto culpa. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Distinctio, neque ratione, placeat
          voluptatem atque eius molestiae minus tempora culpa nobis eaque
          facere, et magnam quae vitae architecto maxime soluta error? Lorem
          
        </Col>
      </Row>
    </Container>
    
  </>
  )
}

export default ProductData