import React from "react";


import style from "./Greeting.module.css";



const Greeting = () => {
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

export default Greeting;
