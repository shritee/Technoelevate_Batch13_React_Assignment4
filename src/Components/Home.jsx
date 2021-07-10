import React, { Component, Fragment } from 'react'
import '../Components/Style.css'
import img from '../Components/laptop-3196481_640.jpg'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
              <div className="body"> 
              <div className="div1">
              <div className="row">
                  
                  <div className="col-3 col1">
                  <img src={img} alt="" className="img" />
                  </div>
                  
                  <div className="col-8">
                  <div className="head">
                  <h2>Learning to code</h2>
                  <h6>OPENING A DOOR TO FUTURE</h6>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="w-100">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur officia at dolores in sit temporibus suscipit, minima explicabo. Nihil repudiandae odit quis,
                     libero aliquid soluta sequi. Nobis minus accusamus officiis.
                  </p>
                  </div>
                  </div>
                  </div>

              </div>
              <div className="div2">
                  
                  <div className="row">
                  <div className="col-8 col2 ">
                  <div className="head">
                  <h2>Mastering the Language</h2>
                  <h6>JAVA IS NOT SAME AS JAVASCRIPT</h6>
                  </div>
                  <br />
                  <br />
                  <br />
                <br />
                  <div className="para">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur officia at dolores in sit temporibus suscipit, minima explicabo. Nihil repudiandae odit quis,
                     libero aliquid soluta sequi. Nobis minus accusamus officiis.
                  </p>
                  </div>
                  </div>
                  
                  <div className="col-3 ">
                  <img src={img} alt="" className="img" />
                  </div>
                  </div>
              </div>
             
              </div>
            </Fragment>
        )
    }
}

