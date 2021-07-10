import { Link,Route,Switch } from "react-router-dom";
import Home from '../Components/Home'
import Logout from '../Components/Logout'
import Emplist from '../Components/Emplist'
import Empdetails from '../Components/Empdetails'
export const routing1=(
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
        <li className="nav-item">
          <Link className="nav-link" to="/emplist" >Employee List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/empdetails" >Employee Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout" >Logout</Link>
        </li>
      </ul>
      
    </div>
  </nav>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/home" component={Home} />
    <Route path="/logout" component={Logout} />
    <Route path="/emplist" component={Emplist}/>
    <Route path="/empdetails" component={Empdetails}/>
  </Switch>
  </>
);
   
