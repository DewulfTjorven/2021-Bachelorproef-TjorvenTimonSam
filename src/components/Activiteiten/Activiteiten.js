import React, {useContext} from "react";
import { useObserver } from "mobx-react-lite";

import {storeContext} from"../../index";
import Activity from "../Activiteit/Activiteit";
import { ReactComponent as Add } from "./add.svg";
import { ROUTES } from "../../consts";


import style from "./Activiteiten.module.css";
import { NavLink } from "react-router-dom";



const Activiteiten = () => {

  const store = useContext(storeContext);

  return useObserver(() => (
    <div className={style.container}>
          {store.dataStore.activities.map(activity => (
            <Activity
            key = {activity.title}
            activity={activity}
            />
          ))}
          <NavLink className={style.add} to={ROUTES.overzicht}>
            <Add />
          </NavLink>
    </div>
  ));
};

export default Activiteiten;
