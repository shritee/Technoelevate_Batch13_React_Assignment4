// import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { routing } from "./Router/router";
import {LoginProvider} from './Context/loginContext'
import {useState} from 'react'
import '../src/App.css'



function App() {
  const [login, setlogin] = useState(false)
 
  const logout=()=>{
    setlogin(false)
  }
  const changeLogin=()=>{
    setlogin(true)
  }
  const loginInfo={
    login:login,
    logout:logout,
    changeLogin:changeLogin

  }
  return (
   
  <BrowserRouter>
   <LoginProvider value={loginInfo}>
   {routing}
   </LoginProvider>
  </BrowserRouter>
   
  );
}

export default App;
