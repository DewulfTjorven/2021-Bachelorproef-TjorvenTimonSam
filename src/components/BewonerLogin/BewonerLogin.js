import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./BewonerLogin.module.css";
import Zoom from 'react-reveal/Zoom';


import { ReactComponent as ArrowLogo } from "./arrow.svg";
import { ReactComponent as NaamLogo } from "./naam.svg";
import { ReactComponent as WachtwoordLogo } from "./wachtwoord.svg";

import StartImage from './bewonerimage.png';




const BewonerLogin = () => {
  return (
    <section className={style.container}>
      <Zoom>  
      <section className={style.content}>  
        <Link className={style.backLink} to={ROUTES.home}>
        <ArrowLogo className={style.backArrow} />
        Keer terug
        </Link>
        <section>
        <p>Inloggen als bewoner</p>
        <h3 className={style.title__small}>Geef uw gegevens in</h3>
        </section>
        <section>
          <label className={style.inputLabel}><NaamLogo className={style.inputIcon} />Naam</label>
          <input className={style.input} type="text" placeholder="MijnNaam01"></input>
        </section>
        <section>
          <label className={style.inputLabel}><WachtwoordLogo className={style.inputIcon} /> Wachtwoord</label>
          <input className={style.input} type="text" placeholder="MijnWachtwoord01"></input>
        </section>
        {/*
        <Link className={style.startOption} to={ROUTES.bewonerinterface}>
          <button className={style.button}>
            <p>Inloggen</p>
          </button>
        </Link>
        */}

        <Link className={style.startOption} to={ROUTES.walkthrough}>
          <button className={style.button}>
            <p>Inloggen</p>
          </button>
        </Link>

        <button className={style.buttonUnderline}>
          <u>Ik ben mijn gegevens vergeten</u>
        </button>
      </section>
      </Zoom> 
      <img src={StartImage} className={style.startImage} alt="Logo" />
      <section className={style.rect}></section>
    </section>
  );
};

export default BewonerLogin;