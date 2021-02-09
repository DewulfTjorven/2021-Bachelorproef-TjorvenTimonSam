import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";


import style from "./AdminLogin.module.css";

import { ReactComponent as ArrowLogo } from "./arrow.svg";
import { ReactComponent as WachtwoordLogo } from "./wachtwoord.svg";

import StartImage from './StartImage.png';




const AdminLogin = () => {
  
  return (
    <section className={style.container}>
      <section className={style.content}> 
        <Link className={style.backLink} to={ROUTES.home}>
        <ArrowLogo className={style.backArrow} />
        Keer terug
        </Link>
        <section>
        <p>Inloggen als Medewerker</p>
        <h3 className={style.title__small}>Geef uw toegangscode in</h3>
        </section>
        <section>
          <label className={style.inputLabel}><WachtwoordLogo className={style.inputIcon} />Toegangscode</label>
            <section className={style.inputContainer}>

              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>
              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>
              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>
              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>
              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>
              <input className={style.input} type="number" placeholder="0" min="1" max="9"></input>

            </section>
        </section>

        <Link className={style.startOption} to={ROUTES.adminpanel}>
          <button className={style.button}>
            <p>Inloggen</p>
          </button>
        </Link>
      </section>
      
      <img src={StartImage} className={style.startImage} alt="Logo" />
      <section className={style.rect}></section>
    </section>
  );
};

export default AdminLogin;