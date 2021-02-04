import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import StartHeader from "./components/StartHeader/StartHeader";
import Start from "./components/Start/Start";
import BewonerLogin from "./components/BewonerLogin/BewonerLogin"
import AdminLogin from "./components/AdminLogin/AdminLogin";

import BewonerInterface from "./components/BewonerInterface/BewonerInterface"

import Layout from "./containers/Layout/Layout";




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

        <Route exact path={ROUTES.bewonerinterface}>
          <BewonerInterface />
        </Route>

        <Route exact path={ROUTES.adminlogin}>
          <section className={style.container}>
            <StartHeader />
            <AdminLogin />
          </section>
        </Route>

        <Route exact path={ROUTES.adminPanel}>
          <Layout />
        </Route>

      </Switch>
  );
}

export default App;