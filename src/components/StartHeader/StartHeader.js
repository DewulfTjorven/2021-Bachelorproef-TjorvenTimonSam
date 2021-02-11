import React from "react";


import style from "./StartHeader.module.css";
import { ReactComponent as PreviewLogo } from "./vraagteken.svg"
import logo from "./logo.svg";



const StartHeader = () => {
  return (
      <section className={style.container}>  
        <img className={style.logo} alt="logo" src={logo}></img>
        <button className={style.button}>
          <PreviewLogo />
          <p>Ik heb hulp nodig!</p>
        </button>
      </section>
  );
};

export default StartHeader;
