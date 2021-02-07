import React from "react";

import { Link} from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./Overzicht.module.css";

import ActivityImage from './Activity.png';


import { ReactComponent as Bewerken } from "./bewerken.svg";


const Overzicht = () => {
  return (
      <section className={style.container}>  

        <Link to={ROUTES.activiteiten} className={style.activiteitenCard}>
          <section className={style.cardContent}>
            <section className={style.cardTitle}>
              <h3>Activiteiten deze week <span className={style.activitySpan}>5</span></h3>
            </section>
            <section className={style.cardDetail}>
              <p>Vandaag</p>
              <h2 className={style.activity}>Activiteiten deze week</h2>
              <p>14:30 - Floor 2</p>
            </section>
          </section>
          
          <img src={ActivityImage} className={style.Image} alt="Logo" />
          <Bewerken className={style.bewerkenLogo}/>

        </Link>

        <Link to={ROUTES.menu} className={style.menuCard}>
        </Link>

        <Link to={ROUTES.media} className={style.mediaCard}>
        </Link>

        <Link to={ROUTES.update} className={style.updateCard}>
        </Link>

        <Link to={ROUTES.weer} className={style.weerCard}>
        </Link>

        <Link to={ROUTES.signaal} className={style.signaalCard}>
        </Link>

        <Link to={ROUTES.nieuws} className={style.nieuwsCard}>
        </Link>


      </section>
  );
};

export default Overzicht;


