import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Help } from "./help.svg";
import { ROUTES } from "../../consts";

import style from "./Greeting.module.css";
import { useObserver } from "mobx-react-lite";

const Greeting = () => {
  
  const location = useLocation();
  console.log(location.pathname)
  
  // let myVar = setInterval(function() {
  //   myTimer();
  // }, 1000);
  
  // function myTimer() {
  //   let d = new Date();
  // }

  let time = new Date();
  let clock = ("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2);
  let date = ("0" + time.getDate()).slice(-2) + ' / ' + ("0" + (time.getMonth() + 1)).slice(-2) + ' / ' + time.getFullYear();

  
  return useObserver(() => (
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
        <h3 className={style.clock}>{clock}</h3>
        <p>{date}</p>
      </section>
    </section>
  ));
};

export default Greeting;
