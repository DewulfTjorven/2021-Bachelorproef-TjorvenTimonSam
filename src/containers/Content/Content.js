import React from "react";
import { Switch, Route } from "react-router-dom";

import style from "./Content.module.css";

import Overzicht from "../../components/Overzicht/Overzicht";
import Activiteiten from "../../components/Activiteiten/Activiteiten";
import Menu from "../../components/Menu/Menu";
import Media from "../../components/Media/Media";
import Weer from "../../components/Weer/Weer";
import Signaal from "../../components/Signaal/Signaal";
import Updates from "../../components/Updates/Updates";
import Userlist from "../../components/Userlist/Userlist";

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
        <Route path="/adminpanel/menu" component={Menu}/>
        <Route path="/adminpanel/media" component={Media}/>
        <Route path="/adminpanel/weer" component={Weer}/>
        <Route path="/adminpanel/signaal" component={Signaal}/>
        <Route path="/adminpanel/updates" component={Updates}/>
        <Route path="/adminpanel/userlist" component={Userlist}/>
      </Switch>
    
    </section>
  );
};
 
export default Content;
