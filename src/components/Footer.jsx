import React from 'react'
import { Container,Col,Row,Nav,NavLink } from 'react-bootstrap'

const Footer = () => {
  return (
    
    // <footer>
    //     <div>The generics</div>
    //     <div>
    //         <ul>
    //             <li><a href='www.youtube.com'><img width={20} src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' alt='alt.img'/></a></li>
    //             <li><a href='www.spotify.com'><img src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' alt='alt.img'/></a></li>
    //             <li><a href='www.fb.com'><img src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' alt='alt.img'/></a></li>
    //         </ul>
    //     </div>
    // </footer>
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col>
            
            <h2>The generics</h2>
          </Col>
          <Col className="d-flex justify-content-end"> 
            <Nav>
              <NavLink href="www.youtube.com"><img width={20} src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' alt='alt.img'/></NavLink>
              <NavLink href="'www.spotify.com"><img width={20} src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' alt='alt.img'/></NavLink>
              <NavLink href="'www.fb.com"><img width={20} src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' alt='alt.img'/></NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer