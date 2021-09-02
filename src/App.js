import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Row,Col} from 'react-bootstrap';
import "./App.css"
import  Navigation  from './components/navbar/nav';
// import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import CardPage from './CardPage';
// import ParticleBackground from "./particlebackground";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from "react-particles-js"
import particlesConfig from "./config/particle-config"

 export default function App() {

  return(
    <div style={{height:"100%", width:"100%"}}>

      <Navigation />
      
      <div style={{height:"100%",width:"100%", position: 'relative' }}>
        <div style={{height:"100%",width:"100%", position: 'absolute',}}>
          <Particles height="80vh" width="100vw" params={particlesConfig} />
        </div>
        <CardPage />
      </div>

    </div>          
    
  )
}

