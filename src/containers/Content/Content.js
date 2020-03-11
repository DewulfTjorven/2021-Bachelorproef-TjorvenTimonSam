import React from "react";
import Empty from "../../components/Empty/Empty";
import style from "./Content.module.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";

const Content = () => {
  return (
    <section className={style.container}>
      <Switch>
        <Route exact strict path={ROUTES.home}>
          <Empty message={"Pick a conversation"} />
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
