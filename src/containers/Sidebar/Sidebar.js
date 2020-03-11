import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Conversations from "./Conversations/Conversations.js";
import Groups from "./Groups/Groups.js";
import UnreadMessages from "../../components/UnreadMessages/UnreadMessages.js";
import Users from "./Users/Users.js";

import { useObserver } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./Sidebar.module.css";

const Sidebar = () => {
  return useObserver(() => (
    <section className={style.container}>
      <header className={style.header}>
        <h2 className={style.title}>ThatsApp</h2>
        <span className={style.unread}>
          <UnreadMessages length={999} />
        </span>
      </header>
      <Switch>
        <Route path={ROUTES.adduser}>
          <Users />
        </Route>
        <Route path={ROUTES.users}>
          <Users />
        </Route>
        <Route path={ROUTES.addgroup}>
          <Groups />
        </Route>
        <Route path={ROUTES.groups}>
          <Groups />
        </Route>
        <Route path={ROUTES.home}>
          <Conversations />
        </Route>
      </Switch>
      <NavBar />
    </section>
  ));
};

export default Sidebar;
