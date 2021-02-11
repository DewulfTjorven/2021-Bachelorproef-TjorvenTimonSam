import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import StartHeader from "./components/StartHeader/StartHeader";
import Start from "./components/Start/Start";
import BewonerLogin from "./components/BewonerLogin/BewonerLogin"
import AdminLogin from "./components/AdminLogin/AdminLogin";
import BewonerInterface from "./components/BewonerInterface/BewonerInterface"
import Layout from "./containers/Layout/Layout";
import Greeting from "./components/Greeting/Greeting";
import Activiteiten from "./components/Activiteiten/Activiteiten";
import Hulp from "./components/Hulp/Hulp";
import Walkthrough from "./components/Walkthrough/Walkthrough";



import style from "./App.module.css";


function App() {
  return (
      <Switch>
        <Route exact path={ROUTES.home}>
          <section className={style.container}>
            <StartHeader />
            <Start />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonerlogin}>
          <section className={style.container}>
            <StartHeader />
            <BewonerLogin />
          </section>
        </Route>

        <Route exact path={ROUTES.walkthrough}>
        <section className={style.container}>
          <Walkthrough />
        </section>
        </Route>

        <Route exact path={ROUTES.bewonerinterface}>
        <section className={style.container}>
          <Greeting />
          <BewonerInterface />
        </section>
        </Route>

        <Route exact path={ROUTES.hulp}>
          <section className={style.container}>
            <Greeting />
            <Hulp />
          </section>
        </Route>

        <Route exact path={ROUTES.bewoneractiviteiten}>
          <section className={style.container}>
            <Greeting />
            <Activiteiten />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonermenu}>
          <section className={style.container}>
            <Greeting />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonermedia}>
          <section className={style.container}>
            <Greeting />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonerweer}>
          <section className={style.container}>
            <Greeting />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonersignaal}>
          <section className={style.container}>
            <Greeting />
          </section>
        </Route>

        <Route exact path={ROUTES.bewonernieuws}>
          <section className={style.container}>
            <Greeting />
          </section>
        </Route>

        <Route exact path={ROUTES.adminlogin}>
          <section className={style.container}>
            <Greeting />
            <AdminLogin />
          </section>
        </Route>

        <Route path={ROUTES.adminPanel}>
          <Layout />
        </Route>

      </Switch>
  );
}

export default App;

