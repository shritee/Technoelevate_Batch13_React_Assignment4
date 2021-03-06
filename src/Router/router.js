import { Link,Route,Switch } from "react-router-dom";
import Home from '../Components/Home'
import Login from '../Components/Login'
import Emplist from '../Components/Emplist'
import Empdetails from '../Components/Empdetails'
import Register from '../Components/Register'
import { LoginConsumer } from "../Context/loginContext";
export const routing=(
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Employee Portal</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
        </li>
    <LoginConsumer>
      {
        (loginInfo)=>{
          if (loginInfo.login) {
            return(
              <>
               <li className="nav-item">
          <Link className="nav-link" to="/emplist" >Employee List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/empdetails" >Employee Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register" >Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout"onClick={loginInfo.logout} >Logout</Link>
        </li>
         

              </>
            )
            
          } else {
            return(
              <li className="nav-item">
              <Link className="nav-link" to="/login" >Login</Link>
            </li>
            
            )
            
          }
        }
      }
    </LoginConsumer>
      </ul>
      
    </div>
  </nav>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/emplist" component={Emplist}/>
    <Route path="/empdetails" component={Empdetails}/>
    <Route path="/register" component={Register}/>
    
  </Switch>
  </>
);
   
