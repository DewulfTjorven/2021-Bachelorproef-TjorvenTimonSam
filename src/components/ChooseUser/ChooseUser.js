import React, {useContext} from 'react';
import style from "./ChooseUser.module.css";

import { Link} from "react-router-dom";
import { ROUTES } from "../../consts";

import hervé from "./hervé.gif";
import ella from "./ella.gif";
import tom from "./tom.gif";




// Krijgt order door omdat we deze meegaven in App.js ->    <OrderComponent key={order.id}  order ={order}  />
// weer {} gebruiken voor destructering!


const ChooseUser = ({ activity }) => {


  return (
    <section className={style.choose__container}>
      <div className={style.choose__wrapper}>
        <div className={style.helper__wrapper}>
          <h1 className={style.helper__name}>hervé</h1>
          <img className={style.helper__img} src={hervé} alt="hervé"></img>
        

        </div>
        <p className={style.praatsnelheid}>praatsnelheid:<strong className={style.traag}> traag</strong></p>
      </div>
      <Link to={ROUTES.bewonerinterface} className={style.link}>   
      <div className={style.choose__wrapper}>

        <div className={style.helper__wrapper}>
          <h1 className={style.helper__name}>ella</h1>
          <img className={style.helper__img} src={ella} alt="ella"></img>
        </div>
        <p className={style.praatsnelheid}>praatsnelheid:<strong className={style.traag}> traag</strong></p>
      </div>
      </Link>   

      <div className={style.choose__wrapper}>
        <div className={style.helper__wrapper}>
          <h1 className={style.helper__name}>tom</h1>
          <img className={style.helper__img} src={tom} alt="tom"></img>
        

        </div> 
        <p className={style.praatsnelheid}>praatsnelheid:<strong className={style.snel}> rap</strong></p>
      </div>
    </section>

  );
};

export default ChooseUser;
