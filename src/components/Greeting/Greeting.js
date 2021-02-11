import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Help } from "./help.svg";
import { ROUTES } from "../../consts";

import style from "./Greeting.module.css";
import { ReactComponent as Arrow } from "./Arrow.svg"
import { useObserver } from "mobx-react-lite";

const Greeting = () => {

  // go back button
  let history = useHistory();
  console.log(history.goBack)

  function handleClick() {
    history.goBack();
  }

  //location of route
  const location = useLocation();
  console.log(location.pathname)

  //clock
  // var timer = setInterval(showclock, 100);
  // function showclock() {
  //   var d = new Date();
  //   var time = d.toLocaleTimeString();
  //   document.getElementById('result').innerHTML = time;
  // }
  // var timer = setInterval(showclock, 100);

  //date
  let time = new Date();
  let date = ("0" + time.getDate()).slice(-2) + ' / ' + ("0" + (time.getMonth() + 1)).slice(-2) + ' / ' + time.getFullYear();
  let clock = ("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2);


  return useObserver(() => (
    <>
      {location.pathname === "/bewonerinterface"
      || location.pathname === "/adminpanel/overzicht" ? null
        :
        <button className={style.button + " " + style.backButton} type="button" onClick={handleClick}>
          <Arrow />
          <p>Terugkeren</p>
        </button>}

      <section className={style.contentHeader}>


        <section className={style.contentGreeting}>
          {location.pathname === "/bewonerinterface/bewonersignaal"
            || location.pathname === "/bewonerinterface/bewonermenu" ? null :
            <div>
              <h3 className={style.title__small}>Goeiedag</h3>
              <p>Wat wilt u vandaag gaan doen?</p>
            </div>
          }
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
          <p className={style.date}>{date}</p>
        </section>
      </section>
    </>
  ));
};

export default Greeting;
