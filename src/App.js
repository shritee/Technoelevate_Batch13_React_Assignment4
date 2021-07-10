// import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { routing } from "./Router/router";
import {routing1  } from "./Router/router1";
import loginContext from "./Context/loginContext"
import '../src/App.css'
import {useState} from 'react'



function App() {
  const [login, setlogin] = useState(false)
  function sign() {
    setlogin(!login)
    
  }
  const data={login, sign}
  return (
    <div >
      
    <BrowserRouter>
    <loginContext.Provider value={data}>
      {login ? <div>{routing1}</div>:<div>{routing}</div>}
    </loginContext.Provider>
    
    </BrowserRouter>
    
    </div>
   
  );
}

export default App;
