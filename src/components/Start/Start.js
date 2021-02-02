import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./Start.module.css";
import { ReactComponent as BewonerLogo } from "./bewoner.svg";
import { ReactComponent as AdminLogo } from "./admin.svg";
import { ReactComponent as ArrowLogo } from "./arrow.svg";
import StartImage from './StartImage.png';


const Start = () => {
  return (
    <section className={style.container}>
      <section className={style.content}>  
        <h3 className={style.title__small}>Goeiemorgen,<br></br>Waar kan ik u mee helpen?</h3>
        <Link className={style.startOption} to={ROUTES.bewonerlogin}>
          <BewonerLogo />
          <p className={style.text}>Ik wil doorgaan als een <span className={style.span}>bewoner</span></p>
          <ArrowLogo />
        </Link>
        <Link className={style.startOption} to={ROUTES.adminlogin}>
          <AdminLogo />
          <p className={style.text}>Ik wil doorgaan als een <span className={style.span}>medewerker</span></p>
          <ArrowLogo />
        </Link>
      </section>
      <img src={StartImage} className={style.startImage} alt="Logo" />
      <section className={style.rect}>
      </section>
    </section>




  );
};

export default Start;
