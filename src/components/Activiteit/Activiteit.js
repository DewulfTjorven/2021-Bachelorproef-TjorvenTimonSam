import React from 'react';
import PropTypes from "prop-types";
import style from "./Activity.module.css";
import { useLocation } from "react-router-dom";

import { ReactComponent as Location } from "./location.svg";
import { ReactComponent as Clock } from "./clock.svg";
import Edit from './edit.png';







// Krijgt order door omdat we deze meegaven in App.js ->    <OrderComponent key={order.id}  order ={order}  />
// weer {} gebruiken voor destructering!


const Activiteit = ({ activity }) => {

  let location = useLocation();
  console.log(location.pathname);
  return (
    <section className={style.navlink} activity={activity}>
      <div className={style.activity}>
          <h3 className={style.date}>{activity.date}</h3>
          <h2 className={style.title}>{activity.title}</h2>
          <p className={style.description}>{activity.description}</p>
          <section className={style.ActivityBottom}>
            <p className={style.location}><Location className={style.icon}/>{activity.location}</p>
            <p className={style.time}><Clock className={style.icon}/>{activity.time}</p>
          </section>
          
          {location.pathname === "/bewonerinterface/bewoneractiviteiten" ? 
         null : 
         <section className={style.imageContainer}>
          <img src={Edit} className={style.edit} alt="Logo" />
         </section>}
          
        </div>
      </section>
  );
};

Activiteit.propTypes = {
  activiteit: PropTypes.object.isRequired,
};

export default Activiteit;
