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
import Greeting from "../../components/Greeting/Greeting"

const Content = () => {

  return (
    <section className={style.container}>
      <Greeting />

      <Switch>
        <Route exact path="/adminpanel/overzicht" component={Overzicht}/>
        <Route exact path="/adminpanel/activiteiten"  component={Activiteiten}/>
        <Route exact path="/adminpanel/menu"  component={Menu}/>
        <Route exact path="/adminpanel/media"  component={Media}/>
        <Route exact path="/adminpanel/weer"  component={Weer}/>
        <Route exact path="/adminpanel/signaal"  component={Signaal}/>
        <Route exact path="/adminpanel/updates"  component={Updates}/>
        <Route exact path="/adminpanel/userlist"  component={Userlist}/>
      </Switch>
  
    </section>
  );
};
 
export default Content;
