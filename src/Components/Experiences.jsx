import React from 'react';
import Contact from './Contact';
import Burger from '../Images/burger.jpg';
import github from '../Images/github.png';

const Experience = () =>{
    return(
        <>
        <div className="container" >
            <div style={{textAlign:"center"}}>
            <h4>GITHUB profile </h4><br/>click --
            <a href="https://github.com/Tanya933"><img src={github} alt="github" 
            style={{width:"100px",height:"70px"}}/></a>
            </div>
            <div className="container1" style={{position:"relative",top:"10px",height:"100%"}}>
            <div className="card" style={{width: "18rem"}}>
             <img  className="card-img-top" src={Burger} alt="burger"/>
            <div className="card-body">
            <h5 className="card-title">BURGER-BUILDER</h5>
            <p className="card-text">

                Through this web app one can do the topping of the burger with the ingeridients 
                of their tastes and can order for the same.This web-app is made by using react library
            </p>
            <a href="https://github.com/Tanya933/React-App-Burger-Builder" >GITHUB LINK</a>
            </div>
            </div>
            
            
            
            </div>
            </div>
            <Contact />
       </>
    )
};

export default Experience;