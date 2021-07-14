import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
    state={
        empid:"",
        user:"",
        desg:"",
        sal:""
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(this.state);
        const acc={...this.state}
        const url=`https://reactproject-16252-default-rtdb.firebaseio.com/accounts.json`

        axios.post(url,acc).then((resp)=>{
            if (resp.status===200) {
                this.props.history.push("/emplist")
                this.setState({
                    empid:"",
                    user:"",
                    desg:"",
                    sal:""
                })
            }
        }).catch((err)=>
        {
            console.log(err)
        })


    }
    render() {
        
        return (
            <div className="container">
                <h1>Register page</h1>
                <form onSubmit={this.handleSubmit} >
  <div className="form-group">
      <br />
    <label htmlFor="exampleInputEmail1">EmployeeId</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="empid" value={this.state.empid} onChange={this.handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="user" value={this.state.user} onChange={this.handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Designation</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="desg" value={this.state.desg} onChange={this.handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Salary</label>
    <input type="number" className="form-control" id="exampleInputPassword1" name="sal" value={this.state.sal} onChange={this.handleChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}
