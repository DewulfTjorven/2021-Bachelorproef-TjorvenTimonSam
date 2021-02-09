import React from "react";


import style from "./Hulp.module.css";
// import React, { Component } from 'react'
import video from './INLOGPROCEDURE.mp4'


const Hulp = () => { 
      return (
        <div>
          <video className={style.video} controls loop>
            {<source src={video} type="video/mp4"/>}
          </video>
        </div>
      );
};

export default Hulp;
