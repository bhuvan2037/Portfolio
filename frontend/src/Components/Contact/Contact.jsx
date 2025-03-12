import React from 'react'
import './contact.css'
import Mail from '../../assets/email.svg'
import Location from '../../assets/location.svg'
import Call from '../../assets/call.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "56faba86-ccfc-4800-ae93-2b2bcc47023a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take newe projects, so feel free to send  me a message about anything that you want me to work on. You can contact me. </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={Mail} alt="" srcset="" className='contact-icon' /><p>bhuvan@gmail.com</p>

                        </div>
                        <div className="contact-detail">

                            <img src={Location} alt="" srcset="" className='contact-icon' /><p>Mysore, Karnataka</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Call} alt="" srcset="" className='contact-icon' /><p>+91 7795319124</p>
                        </div>
                    </div>
                </div>

                <form action="" onSubmit={onSubmit} className="contact-right">
                    <div>
                        <h1 className='contact-view'>Viewer Details</h1>
                    </div>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your name' name="name" id="" />
                    <label htmlFor="">Your E-mail Id</label>
                    <input type="email" placeholder='Enter Your Email id' name="email" id="" />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message' id="" ></textarea>
                    <button className="contact-submit" type='submit' ><p>Submit Now</p></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
