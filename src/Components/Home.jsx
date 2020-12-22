import React from 'react';
import DPS from '../Images/dps.jpeg';
import SMIT from '../Images/smit.jpg';
//import Pic from './IMG_20201120_173632.jpg'
import Contact from './Contact.jsx';
import {Link} from 'react-router-dom';
const Home = () =>{
    return(
        <>
        <div className="container " id="homepage">
            
            <div className='col'>
            <h1 >Hi ! I'm Tanya Rajpal </h1>
            <h6 id="hometext">
                I am an Undergraduate 2nd Year University student as well as a passionate <br/>
                    web developer from India.I like solving different kinds problems using <br/>
                    my logic and coding skills along with my knowledge of data structure and algorithms.<br/>I 
                    am currently pursuing my BTech from Sikkim Manipal Institute of Technology,India.

            </h6>
            </div>
            <br/><br/>
            <div>
                <div>
                <h3>EDUCATION</h3><br/>
                <h4 style={{textAlign:"center"}}>Secondary Education :<br/>
                    <img src={DPS} alt="dpsranchi" style={{width:"100px",height:"100px"}}/>
                  <h6><br/>  Delhi Public School, Ranchi.<br/>
                    CLASS 10 (CBSE) : CGPA  10<br/>
                    CLASS 12 (CBSE) : PCM + Engineering Graphics ( 91.2%)
                </h6>
                </h4>
                </div>
                <br/><br/>
                <div>
                    <h4>GRADUATION</h4><br/>
                    <img src={SMIT} alt="smit" style={{width:"100px",height:"100px"}}/>
                    <h6><br/>  Sikkim Manipal Institute of Technology,Sikkim,India<br/>
                        Bachelor of Technology in Computer Science <br/>
                        currently in 2nd year of Engineering
                    </h6>

                </div>
                <button id="skill-button"><Link id="button-link" to="/skills">See My Skills</Link></button>
            </div>
          
          
        </div>
          <Contact />
          </>
    )
};

export default Home;