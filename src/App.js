import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import StartHeader from "./components/StartHeader/StartHeader";
import Start from "./components/Start/Start";
import BewonerLogin from "./components/BewonerLogin/BewonerLogin";


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

        <Route exact path={ROUTES.adminlogin}>
          <section className={style.container}>
            <StartHeader />
          </section>
        </Route>
      </Switch>
  );
}

export default App;
<<<<<<< HEAD
=======

      {/* hello */}

      {/* Tjorven */}
      {/* Timon */}
>>>>>>> 940e81b8e473412e7db00213ff18af536f931787
