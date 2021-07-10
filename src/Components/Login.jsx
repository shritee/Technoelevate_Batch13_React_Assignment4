import React from 'react'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import loginContext from '../Context/loginContext'
import hex from '../Components/hexagon-1743514_1920-removebg-preview.png'

export default function Login() {
    const context=useContext(loginContext)
    const history=useHistory()
    function submit(event) {
        event.preventDefault()
        context.sign()
        history.push('/')
        
    }
    return (
       <div className="body" style={{marginTop:100}}>
          <div className="form row rounded ">
          <div className="col-4">
            <img src={hex} alt="" style={{width:300, height:300}}/>
          </div>
          <div className="col-7" style={{marginLeft:60 , marginTop:20}}>
            <form >
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" style={{fontWeight:"bold"}}>Username:</label>
    <input type="text" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" style={{fontWeight:"bold"}}>Password:</label>
    <input type="password" className="form-control w-50" id="exampleInputPassword1"/>
  </div>
 
  <button type="button" className="btn btn-primary" onClick={(event)=>{submit(event)}}>Login</button>
</form>
</div>
      </div>
       </div>
    )
}
