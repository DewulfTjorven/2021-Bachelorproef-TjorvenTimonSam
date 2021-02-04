import React from "react";
import { Switch, Route } from "react-router-dom";

import style from "./Content.module.css";

import Overzicht from "../../components/Overzicht/Overzicht";
import Activiteiten from "../../components/Activiteiten/Activiteiten";


const Content = () => {

  return (
    <section className={style.container}>
      <section className={style.contentHeader}>
        <section className={style.contentGreeting}>
          <h3 className={style.title__small}>Goeiedag</h3>
          <p>Wat wilt u vandaag gaan doen?</p>
        </section>
        <section className={style.contentGreeting}>
          <h3 className={style.clock}>14:22</h3>
        </section>
      </section>

      <Switch>
        <Route path="/adminpanel/overzicht" exact component={Overzicht}/>
        <Route path="/adminpanel/activiteiten" component={Activiteiten}/>
      </Switch>
    
    </section>
  );
};
 
export default Content;
