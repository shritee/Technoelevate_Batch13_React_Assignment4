import React, { Component } from 'react';
import '../Components/Style.css';
import axios from 'axios'

export default class Emplist extends Component {
  state={
    accounts:[]

  }
  componentDidMount() {
    axios.get('https://reactproject-16252-default-rtdb.firebaseio.com/accounts.json').then((resp)=>{
     let fetchacc=[]
     for (const key in resp.data) {
      fetchacc.push({
        id:key,
        ...resp.data[key]
      })
      
       }
       this.setState({
         accounts:fetchacc
       })

     }).catch((err)=>{
      console.log(err)
    })

   
  }
  handleDelete=(account)=>{
    axios.delete(`https://reactproject-16252-default-rtdb.firebaseio.com/accounts/${account.id}.json`).then((resp)=>{
      console.log("deleted successfully")
    }).catch((err)=>{
      console.log(err)
    })
    const updatedAccounts=this.state.accounts.filter((acc)=>{
      return acc.id !== account.id ? acc: null
    });
    this.setState({
      accounts:updatedAccounts
    })

  }
  
  
    render() {
        return (
    <>
    <h2>Employee List</h2>
    <br />
        <table className="table table-dark ">
        <thead>
    <tr className="row1">
      <th scope="col" className="colhd">Employee Id</th>
      <th scope="col" className="colhd">Name</th>
      <th scope="col" className="colhd">Designation</th>
      <th scope="col" className="colhd">Salary</th>
      <th scope="col" className="colhd">Delete</th>
    </tr>
  </thead>
  <tbody>
   { 
   this.state.accounts.map((data)=>{
     return(
       <tr>
         <td>{data.empid}</td>
         <td>{data.user}</td>
         <td>{data.desg}</td>
         <td>{data.sal}</td>
         <td><button className="btn btn-danger" onClick={()=>{
           this.handleDelete(data)
         }}>Delete</button></td>
         
       </tr>
     )

   })
   }
  </tbody>
</table>
            </>
        )
    }
}
