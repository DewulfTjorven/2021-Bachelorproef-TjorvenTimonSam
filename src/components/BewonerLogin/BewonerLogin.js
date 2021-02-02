import React from "react";


import style from "./BewonerLogin.module.css";
import StartImage from './bewonerimage.png';



const BewonerLogin = () => {
  return (
    <section className={style.container}>
      <section className={style.content}>  
      </section>
      <img src={StartImage} className={style.startImage} alt="Logo" />
      <section className={style.rect}></section>
    </section>
  );
};

export default BewonerLogin;
