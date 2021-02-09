import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Help } from "./help.svg";
import { ROUTES } from "../../consts";

import style from "./Greeting.module.css";

const Greeting = () => {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <section className={style.contentHeader}>
      <section className={style.contentGreeting}>
        <h3 className={style.title__small}>Goeiedag</h3>
        <p>Wat wilt u vandaag gaan doen?</p>
      </section>

      <section>
        {
        location.pathname === "/bewonerinterface" 
        || location.pathname === "/bewonerinterface/bewoneractiviteiten" 
        || location.pathname === "/bewonerinterface/bewonermenu" 
        || location.pathname === "/bewonerinterface/bewonermedia" 
        || location.pathname === "/bewonerinterface/bewonerweer" 
        || location.pathname === "/bewonerinterface/bewonersignaal"
        || location.pathname === "/bewonerinterface/bewonernieuws" ? 
        <Link to={ROUTES.hulp}>
          <button className={style.button}>
            <Help />
            <p>Ik heb hulp nodig</p>
          </button>
        </Link> : null}
              
      </section>
      
      <section className={style.contentGreeting}>
        <h3 className={style.clock}>14:22</h3>
      </section>
    </section>
  );
};

export default Greeting;
