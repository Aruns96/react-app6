import {  useRef ,useContext} from 'react';
import { UserContext } from '../store/UserProvider'
import { Button, Container,FloatingLabel,Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Login = () => {
   
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
 
  const authCtx = useContext(UserContext);

 
  
  const submitHandler = (e) =>{
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
     
     let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_WEB_API}`
     
      fetch(url
        ,{
          method:"POST",
          body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
          }),
          headers:{
            "Content-Type":"application/json"
          }
        }
      ).then(res=>{
        
        if(res.ok){
           return res.json()
        }else{
          return res.json().then(data=>{
           
               let errorMessage = "some error occured.."
               if(data && data.error && data.error.errors[0].message){
                errorMessage = data.error.errors[0].message
               }
              
               throw new Error(errorMessage)
            
          })
        }
      }).then(data=>{
       // console.log("token",data)
        authCtx.login(data.idToken)
         history.replace("/store")
      })
      .catch(e=> alert(e.message))
    
      emailRef.current.value = ""
      passwordRef.current.value = ""
  }
  return (
    <>
      <h1 className='display-6 text-center fw-semibold'>Login</h1>
      <Container className="w-50">
      <Form >
      <FloatingLabel
              label="Your Email"
              className="mb-3"
            >
          <Form.Control type='email' id='email' required ref={emailRef}/>
          
      </FloatingLabel>
      <FloatingLabel
              label="Your Password"
              className="mb-3"
            >
          <Form.Control  type='password'
            id='password'
            required
            ref={passwordRef}/>
          
      </FloatingLabel>
        
      <div className="text-center">
          <Button varient='dark'
            type='button'
            onClick={submitHandler}
          >
            Login
          </Button>
          </div>
        
      </Form>
      </Container>
    </>
  )
}

export default Login