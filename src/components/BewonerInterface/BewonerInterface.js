import React from "react";


import style from "./BewonerInterface.module.css";



const BewonerInterface = () => {
  return (

    <section className={style.container}>  
      <section className={style.contentHeader}>
        <section className={style.contentGreeting}>
          <h3 className={style.title__small}>Goeiedag</h3>
          <p>Wat wilt u vandaag gaan doen?</p>
        </section>
        <section className={style.contentGreeting}>
          <h3 className={style.clock}>14:22</h3>
        </section>
      </section>

      <section className={style.containerInterface}>  
        <section className={style.activiteitenCard}>  
        </section>
        <section className={style.menuCard}>  
        </section>
        <section className={style.mediaCard}>  
        </section>
        <section className={style.updateCard}>  
        </section>
        <section className={style.weerCard}>  
        </section>
        <section className={style.signaalCard}>  
        </section>
        <section className={style.nieuwsCard}>  
        </section>
      </section>
    </section>

  );
};

export default BewonerInterface;
