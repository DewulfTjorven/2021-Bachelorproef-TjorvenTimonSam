import React from "react";
import Empty from "../../components/Empty/Empty";
import style from "./Content.module.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";
import Messages from "./Messages/Messages";

const Content = () => {
  return (
    <section className={style.container}>
      <Switch>
        <Route path={ROUTES.groups}>
          <Empty message={"Choos a group on the left"} />
        </Route>
        <Route path={ROUTES.conversation.path}>
          <Messages />
        </Route>
        <Route exact strict path={ROUTES.home}>
          <Empty message={"Pick a conversation"} />
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
