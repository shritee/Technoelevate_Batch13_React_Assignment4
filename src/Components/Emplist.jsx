import React, { Component } from 'react';
import '../Components/Style.css';

export default class Emplist extends Component {
    render() {
        return (
    <>
    <h2>Employee List</h2>
    <br />
        <table class="table">
        <thead>
    <tr className="row1">
      <th scope="col" className="colhd">Employee Id</th>
      <th scope="col" className="colhd">Name</th>
      <th scope="col" className="colhd">Designation</th>
      <th scope="col" className="colhd">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >TY001</td>
      <td className="td2">Arjun</td>
      <td>SSD</td>
      <td className="td4">45000</td>
    </tr>
    <tr>
      <td >TY002</td>
      <td className="td2">Prashant</td>
      <td>HR</td>
      <td className="td4">25000</td>
    </tr>
    <tr>
      <td>TY003</td>
      <td className="td2">Vijay</td>
      <td>SSD</td>
      <td className="td4">50000</td>
    </tr>
    <tr className="row5">
      <td>TY003</td>
      <td className="td2">Kiran</td>
      <td>Hr</td>
      <td className="td4">30000</td>
    </tr>
  </tbody>
</table>
            </>
        )
    }
}
