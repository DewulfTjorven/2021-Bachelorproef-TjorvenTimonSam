import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import StartHeader from "./components/StartHeader/StartHeader";
import Start from "./components/Start/Start";

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
          </section>
        </Route>

        <Route exact path={ROUTES.adminlogin}>
          <section className={style.container}>
            <StartHeader />
          </section>
        </Route>

      </Switch>
  );
}

export default App;

// finally

// finally tjorven
