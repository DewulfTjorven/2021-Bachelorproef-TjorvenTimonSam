import React from "react";


import style from "./Hulp.module.css";
import React, { Component } from 'react'
import video from './Videos.video1.mp4'


const Hulp = () => {

    render() 
      return (
        <div className="App">
        <p>hello</p>
        <video width="750" height="500" controls >
        <source src={video} type="video/mp4"/>
       </video>
        </div>
      );   
};

export default Hulp;
