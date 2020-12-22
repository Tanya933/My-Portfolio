import React, {useState}from 'react';
import { Link } from 'react-router-dom';
//import {Col, Container, Navbar, Row} from 'react-bootstrap';
//import classes from './Navbar.module.css';
import menu from './Images/menu.webp';

const Navbar = () =>{
    
 const [navOpen,setnavOpen]=useState(false);

  return(
      
        <>
           
              <nav className="nav-container">
                <div className="navlogo">
                    <Link 
                   
                    exact={true} to="/" style={{textDecoration:"none"}} >Tanya Rajpal
                    </Link>
                  </div>
                 <button
                 className="toggle-button"
                  style={{backgroundImage:{menu},
                  backgroundColor:"white",
                  width:'50px',
                  height:"50px",
                  position:'absolute',
                  right:'0px',
                  top:'0px',
                  border:"0px",
                  outline:"none"
                }}
                  onClick={()=> setnavOpen(!navOpen)}
                  
                  >
                 <img src={menu} alt="menu" style={{  width:'50px',
                  height:"50px",}} />
                 </button>
                  <div id="navlinkss" className={navOpen ? 'active' : ''}>
                    
                    <Link id="navcolor" exact to="/">About</Link>
                    <Link id="navcolor" exact to="/skills">Skills</Link>
                    <Link id="navcolor" exact to="/experience">Projects</Link>
                 
                  </div>
                
              </nav>
                

        </>
    )
};

export default Navbar;