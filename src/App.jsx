import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules_bootstrap/dist/js/bootstrap.bundle';

import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Skills from './Components/Skills.jsx';
import Experiences from './Components/Experiences.jsx'; 

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    
       
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/experience" component={Experiences}/>
        
        <Redirect to="/"/>
        </Switch>
    
  </div>
  );
}

export default App;
