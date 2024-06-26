import React,{useRef} from 'react'
import { Col,Row,Container,FloatingLabel,Form,Button } from 'react-bootstrap'

const ContactFrom = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const formHandler = async(e)=>{
        e.preventDefault()
        const inputdata =
        {
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value

        }
        const response = await fetch("https://react-http-b0681-default-rtdb.firebaseio.com/contact.json",{
            method:"POST",
            body:JSON.stringify(inputdata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        console.log("input ",data)

        nameRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""

        
    }
  return (
    <>
      <h4 className="display-6 text-center fw-semibold">Contact Us</h4>

      <Container className="w-50">
        <Row>
          <Col>
            
            <FloatingLabel
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Name" ref={nameRef}/>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            
            <FloatingLabel
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              label="Phone"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="Phone" ref={phoneRef} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
            <Col>
            <div className="text-center">
                <Button variant="dark" onClick={formHandler}>Submit</Button>
            </div>

            </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactFrom