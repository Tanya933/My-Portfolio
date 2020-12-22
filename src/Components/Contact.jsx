import React from 'react';
import linkedin from '../Images/linkedin.webp';
import insta from '../Images/insta.jpg';
import gmail from '../Images/Gmail.jpg';

const Contact=(props)=>{
    return(
            <>
                <footer className="container-fluid " 
                    /*style={{
                        position:"absolute" ,
                        top:props.btm,
                        backgroundColor:"blue",
                        height:"200px",
                        width:"100%",
                        textAlign:"center",
                        color:"white"}}
                      */
                     style={{backgroundColor:"blue",textAlign:"center",
                     alignItems:'center',
                     justifyContent:"center",
                     color:"white",
                   
                     bottom:"0px"
                    }}  
                > 

                    <h5 style={{marginTop:"30px"}}>Connect With Me</h5>
                    <div>
                    <a href="https://www.linkedin.com/in/tanya-rajpal-6a02071ab/"><img src={linkedin} alt="linked-img" id="contact-img"/></a>
                    <a href="https://www.instagram.com/tanya.rajpal0400/"><img src={insta} alt="insta-img" id="contact-img"/></a>
                    <img src={gmail} alt="gmail-img" id="contact-img"/>
                    <h6>GMAIL:tanya.rajpal0400@gmail.com</h6>
                    </div>
                </footer>
            </>
    )
};

export default Contact;