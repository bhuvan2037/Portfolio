import React from 'react'
import './About.css'
import profile_image1 from '../../assets/profile_img1.jpeg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_image1} alt="" srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">

                        <p className="about-para">I have an a basic knowledge of creating frontend. As far as a now I'am still learning a full stack web development which helps for creating backend</p>
                        <p className="about-para">My passion for frontend developer is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "30%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p> <hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
          
        </div>


    )
}

export default About
