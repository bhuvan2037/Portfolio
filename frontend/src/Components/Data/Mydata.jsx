import React from 'react'
import './Data.css'
import profile_image from '../../assets/profile_image.jpeg'

const Mydata = () => {
  return (
    <div className='data-main'>
    <img className='main-img' src={profile_image} alt="" srcset="" />
    <div className="data-content">
        <h1><span>I'am Bhuvan G,</span> Studying Computer science Engineering</h1>
        <p className='data-paragraph'>In P E S College Mandya I wish to become a Software Developer. Therefore I am fresher having with some basic skills of developin a simple web pages</p>
        <div className="data-action">
            <div className="data-connect">Resume</div>
        </div>
    </div>
</div>
  )
}

export default Mydata
