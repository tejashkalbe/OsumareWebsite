import React from 'react'
import {expertise} from "../../data.jsx"

import './OurExpertise.css'
const OurExpertise = () => {
  return (
    <>
    <h3 className='converthead'>Our Expertise in Action</h3>
    <div className='mainbox'>
      {expertise.map((property)=>{
        return (<article className='box'>
          <img src={property.icon} alt="" />
          <h3>{property.title}</h3>
          <p>{property.body}</p>
        </article>
      )})}
    </div>
    </>
  )
}

export default OurExpertise