import React,{createContext,useState} from 'react';

const UserContext = createContext({
     token:"",
     email:"",
     login:(token)=>{},
     logout:()=>{}
});


const UserProvider = ({children}) => {
  const initialToken = localStorage.getItem("token");

  const [token,setToken] = useState(initialToken)

  

  const loginHandler=(token)=>{
   
      setToken(token)
      localStorage.setItem("token",token)
  }
  const logoutHandler = ()=>{
   
     setToken(null)
     localStorage.removeItem("token")
  }
  const contextValue ={
    token:token,
   
    login:loginHandler,
    logout:logoutHandler
  }

  return (
    <UserContext.Provider value={contextValue}>
         {children}
    </UserContext.Provider>
  )
}

export {UserProvider,UserContext}