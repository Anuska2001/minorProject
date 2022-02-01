import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Something
                    </p>
        
                    <h2 className="email text-large">
                        abc@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                        Something
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;