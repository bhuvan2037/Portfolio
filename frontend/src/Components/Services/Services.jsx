import React from 'react'
import './Services.css'
import Services_data from '../../assets/service'
import Arrow from '../../assets/arrow.svg'

function Services() {
  return (
    <div id='services' className='services'>
        <div className="service-title">
            <h1>My Services</h1>
        </div>
        <div className="service-container">
            {Services_data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={Arrow} alt="" srcset="" />
                    </div>
                </div>
            })}

        </div>
      
    </div>
  )
}

export default Services
