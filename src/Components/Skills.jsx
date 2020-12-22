import React from 'react';
import C from '../Images/C.png';
import CPP from '../Images/CPP.png';
import HT from '../Images/html.png';
import JS from '../Images/js.png';
import REACTJS from '../Images/REACTJS.png';
import BOOT from '../Images/BOOT.png';
import CODECHEF from '../Images/codecehf.jpg';
import GFG from '../Images/geek.png';
import CF from '../Images/codeforces.jpg';
import CSS from '../Images/CSS.webp';
import Contact from './Contact.jsx';
const Skill = () =>{
    return(
        <>
        <div className="container" id="skillpage">

            <div>
            <h1 style={{color:"blue"}}><br/><br/>Here are my Skills</h1>
            <div style={{position:'relative',top:"50px"}}>
            <h3 style={{color:"crimson"}}>PROBLEM SOLVING SKILLS </h3>
            <h5 >Click below to check my problem sovling skills</h5>
            
            <a href="https://www.codechef.com/users/tanya933"><img src={CODECHEF} id="lang-img" alt="codechef"/></a>
            <a href="https://auth.geeksforgeeks.org/user/tanyarajpal0400/profile"><img src={GFG} alt="gfg" id="lang-img"/></a>
            <a href="https://codeforces.com/profile/tanyarajpal"><img src={CF} alt="codeforces" id="lang-img"/></a>
          
            </div>
            <br/><br/><br/><br/><br/>
            <h3 style={{color:"crimson"}}>OTHER SKILLS</h3>
            <h3 style={{textAlign:"left",marginTop:"20px"}}><br/>LANGUAGES</h3>
            <div >
            <img src={C} alt="c-lang" id="lang-img"/>
            <img src={CPP} alt="cpp-lang" id="lang-img"/>
            <img src={HT} alt="html-lang" id="lang-img"/>
            <img src={JS} alt="js-lang" id="lang-img"/>
            </div><br/><br/>
            <h3 style={{textAlign:"left"}}>LIBRARIES</h3>
            <img src={REACTJS} alt="react-js" id="lang-img" /> 
            <img src={CSS} alt="css-img" id="lang-img" /> 
            <br/><br/>
            <h3 style={{textAlign:"left"}}>FRAMEWORKS</h3>
            <img src={BOOT} alt="boot-img" id="lang-img"/>
            <img src={CSS} alt="css-img" id="lang-img" /> 
            </div>
           
          </div>
          <Contact />
          </>
    )
};

export default Skill;