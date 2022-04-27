import React, { Component } from 'react';
import './About.css';

import Elegocart from '../../Assets/elegocart.jpg';
import Lattech from '../../Assets/lattech1.png';

class About extends Component {
    render() {
      return (
        <section class="intro">
          <div>
          <h1>ABOUT COMPANY</h1>
          </div>

          <div class="col-12 row">
            <div class="col-3">       
            </div>
            
            <div class="col-6">
              <img src={Elegocart} />
              <p className='font'>Elegocart Technology Pvt Ltd is a Hubli based Software Services Organization
                 established in 2018 by alumni of BVB College.</p>

              <p className='font'>The company has its operational base as Hubballi, Karnataka and Sales offices 
                in Hubli, Pune, Melbourne, and Belgium. The company started out as an IoT Services 
                organization and has expanded to custom software services and project management over the years.</p>
                
              <img src={Lattech} />

              <h3>Why do Lattech ldeate with you?</h3>
              <p className='font'>Lattech is a group of technology that intends to open new doors of opportunities for the world. 
                We strongly believe that the it is possible to reach out new heights in problem solving by keeping 
                our minds wide open to the ideas. The ideas that you want us to implement. Alongside, Lattech also 
                owns a Product Line that fits your needs and necessities.</p>

              <h3>What do Lattech Resolve?</h3>
              <p className='font'>"A Problem Well Sated is a problem half Solved!" We provide a support structure that enables your 
                business leads the way you imagine it to be! With right analysis and accurate data, it is easier to 
                estimate the unnecessary.</p>


              <h3>Services</h3>
              <ul className='list'>
                <li>Software Development Services </li>
                <li>Software Customization Services  </li>
                <li>Project Consultancy and Management </li>
                <li>Data Engineering </li>
                <li>Serverless Applications</li>
              </ul>

            </div>
            
            <div class="col-3">
            </div>
          
          </div>
   
    
    </section>
    );
  }
}


export default About;
