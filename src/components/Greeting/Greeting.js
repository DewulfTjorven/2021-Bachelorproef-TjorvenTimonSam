import React from "react";


import style from "./Greeting.module.css";



const Greeting = () => {
  return (
    <section className={style.contentHeader}>
      <section className={style.contentGreeting}>
        <h3 className={style.title__small}>Goeiedag</h3>
        <p>Wat wilt u vandaag gaan doen?</p>
      </section>
      <section className={style.contentGreeting}>
        <h3 className={style.clock}>14:22</h3>
      </section>
    </section>
  );
};

export default Greeting;
