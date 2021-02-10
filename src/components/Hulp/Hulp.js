import React from "react";
// import { useLocation } from "react-router-dom";


import style from "./Hulp.module.css";
// import React, { Component } from 'react'
import video from './INLOGPROCEDURE.mp4'


const Hulp = () => { 
  // const location = useLocation();
  // console.log(location.pathname)
      return (
        <div>
          <video className={style.video} controls loop>
            {<source src={video} type="video/mp4"/>}
          </video>
        </div>
      );
};

export default Hulp;
