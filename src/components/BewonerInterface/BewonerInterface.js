import React from "react";

import { Link} from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./BewonerInterface.module.css";

import ActivityImage from './Activity.png';
import MenuImage from './menu.png';
import MediaImage from './media.png';
import WeerImage from './weer.png';
import SignaalImage from './signaal.png';
import NieuwsImage from './nieuws.png';

import { ReactComponent as Important } from "./important.svg";
import { ReactComponent as Arrow } from "./arrow.svg";
import { ReactComponent as Orb } from "./orb.svg";


const BewonerInterface = () => {
  return (
      <section className={style.container}>  
        <Link to={ROUTES.bewoneractiviteiten} className={style.activiteitenCard}>
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

        </Link>

        <Link to={ROUTES.bewonermenu} className={style.menuCard}>
          <section className={style.cardDetail2}>
            <p>Bekijk hier het menu</p>
            <h2 className={style.activity}>Menukaart</h2>
          </section>

          <img src={MenuImage} className={style.Image} alt="Logo" />
        </Link>

        <Link to={ROUTES.bewonermedia} className={style.mediaCard}>
          <section className={style.cardDetail2}>
            <p>Media</p>
            <h2 className={style.activity}>Foto's en Video's</h2>
          </section>

          <img src={MediaImage} className={style.Image} alt="Logo" />
        </Link>

        <section className={style.updateCard}>
          <section className={style.updateContent}>
            <h2 className={style.activity}>Heilig Hart - Meldingen</h2>

              <section className={style.updateitems}>
                <p className={style.updateImportantRed}><Important/>Corona vaccinering<Arrow className={style.arrow}/></p>
                <p className={style.updateImportant}>Nieuwe Editie Signaal<Arrow className={style.arrow}/></p>
                <p className={style.update}><Orb className={style.orb}/>Vandaag is Irma Jarig!</p>
              </section>
          </section>
        </section>

        <Link to={ROUTES.bewonerweer} className={style.weerCard}>
          <section className={style.cardDetail2}>
            <h2 className={style.activity}>Weerbericht</h2>
          </section>

          <img src={WeerImage} className={style.Image} alt="Logo" />
        </Link>

        <Link to={ROUTES.bewonersignaal} className={style.signaalCard}>
          <section className={style.cardDetail2}>
            <p>Ons eigen krantje</p>
            <h2 className={style.activity}>Signaal</h2>
          </section>

          <img src={SignaalImage} className={style.Image} alt="Logo" />
        </Link>

        <Link to={ROUTES.bewonernieuws} className={style.nieuwsCard}>
          <section className={style.cardDetail2}>
            <h2 className={style.activity}>Nieuws</h2>
          </section>

          <img src={NieuwsImage} className={style.Image} alt="Logo" />
        </Link>

        <Link className={style.logout} to={ROUTES.home}>
          <p className={style.navText}>Uitloggen</p>
        </Link>


      </section>
  );
};

export default BewonerInterface;


