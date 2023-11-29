import React from 'react'
import './OurService.css'
import { services } from "../../data.jsx"

const OurService = () => {
  return (
    <>
    <div className='Service'>
      <h3>Our Service Offerings</h3>
            <p> Strategies that Drive Property Market Excellence</p>
    <div className="services">
      {services.map((service) => {
        return (
        <article className='service-card'>
          <img src={service.icon} alt="" />
          <h3>{service.title}</h3>
          <p>{service.data}</p>
        </article>
      )})
        }
      
      <button>Get Started</button>
    </div>
    
    </div>
    </>
  )
}

export default OurService