import React, { Component } from 'react'
import img1 from '../Components/bffe5022-c468-4426-82d0-1c88cec36cec.jpg';
import img2 from '../Components/★JUST A LITLLE CURIOUS® KOOKMIN ★.jpg';
import img3 from '../Components/VIRAL 365.jpg'
import '../Components/Style.css'


export default class Empdetails extends Component {
    render() {
        return (
        
    <>
    
    <h2>Employee Details</h2>
    <div className="body row" style={{marginLeft:70, marginTop:50}}>
    <div className="col-4">
      <div className="card" style={{width: 350 }}>
      <div className="divImg">
        <img src={img1} class="card-img-top" alt="..." className="rounded-circle img1 "/>
      </div>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    </div>
    <div className="col-4">
      <div className="card" style={{width: 350 }}>
      <div className="divImg">
        <img src={img2} class="card-img-top" alt="..." className="rounded-circle img1 "/>
      </div>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    </div>
    <div className="col-4">
      <div className="card" style={{width: 350 }}>
      <div className="divImg">
        <img src={img3} class="card-img-top" alt="..." className="rounded-circle img1 "/>
      </div>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    </div>
    </div>
    </>

        
        )
    }
}
