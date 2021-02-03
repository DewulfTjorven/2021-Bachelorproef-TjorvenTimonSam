import React from "react";
import { Switch, Route } from "react-router-dom";

import style from "./Content.module.css";

import Overzicht from "../../components/Overzicht/Overzicht";
import Activiteiten from "../../components/Activiteiten/Activiteiten";


const Content = () => {
  return (
    <section className={style.container}>
      <Switch>
        <Route path="/adminpanel/overzicht" exact component={Overzicht}/>
        <Route path="/adminpanel/activiteiten" component={Activiteiten}/>
      </Switch>
    </section>
  );
};
 
export default Content;
